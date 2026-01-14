'use client';

import { useEffect, useRef } from 'react';

type Theme = 'light' | 'dark';

const getTheme = (): Theme =>
  (document.documentElement.getAttribute('data-theme') as Theme) === 'dark' ? 'dark' : 'light';

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cleanupRef = useRef<() => void>(() => {});
  const currentTheme = useRef<Theme>('light');

  useEffect(() => {
    let mounted = true;
    let raf: number;

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
        if (existing) {
          existing.addEventListener('load', () => resolve(), { once: true });
          if ((window as any).THREE) resolve();
          return;
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(s);
      });

    const init = (theme: Theme) => {
      if (!mounted || !containerRef.current) return;
      const THREE = (window as any).THREE;
      if (!THREE) return;

      // cleanup previous scene
      cleanupRef.current();

      const width = window.innerWidth;
      const height = window.innerHeight;
      const scene = new THREE.Scene();

      const palette =
        theme === 'dark'
          ? { fg: 0x22d3ee, bg: 0x05070c, accent: 0x818cf8 }
          : { fg: 0x0ea5e9, bg: 0xf8fafc, accent: 0x6366f1 };

      scene.fog = new THREE.Fog(new THREE.Color(palette.bg), 20, 220);

      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 500);
      camera.position.set(0, 0, 160);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setClearColor(palette.bg, 0); // fully transparent
      containerRef.current.appendChild(renderer.domElement);

      const particleCount = 1100;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 320;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 180;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 280;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: palette.fg,
        size: 1.8,
        transparent: true,
        opacity: 0.28,
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // add subtle accent planes to mimic subject gradients
      const planeGeo = new THREE.PlaneGeometry(260, 180);
      const planeMat = new THREE.MeshBasicMaterial({
        color: palette.accent,
        transparent: true,
        opacity: 0.06,
      });
      const plane = new THREE.Mesh(planeGeo, planeMat);
      plane.position.set(0, 0, -60);
      scene.add(plane);

      const animate = () => {
        raf = requestAnimationFrame(animate);
        points.rotation.y += 0.0006;
        points.rotation.x += 0.00035;
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', onResize);

      cleanupRef.current = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        planeGeo.dispose();
        planeMat.dispose();
        if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    };

    (async () => {
      try {
        await loadScript('https://unpkg.com/three@0.156.0/build/three.min.js');
        if (!mounted) return;
        currentTheme.current = getTheme();
        init(currentTheme.current);
      } catch {
        /* ignore */
      }
    })();

    const observer = new MutationObserver(() => {
      const next = getTheme();
      if (next !== currentTheme.current) {
        currentTheme.current = next;
        init(next);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      mounted = false;
      cleanupRef.current();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -3,
        pointerEvents: 'none',
      }}
    />
  );
}
