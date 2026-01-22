'use client';

import Image from 'next/image';

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href="https://wa.me/9096139645"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-contact__bubble"
      >
        <Image
          src="/images/whatsapp_icon.png"
          alt="WhatsApp"
          width={36}
          height={36}
          priority
        />
        <span className="floating-contact__label">WhatsApp</span>
      </a>
      <a
        href="tel:+919096139645"
        aria-label="Call Vidya Bhumi"
        className="floating-contact__bubble"
      >
        <Image
          src="/images/phone_icon.png"
          alt="Phone"
          width={36}
          height={36}
          priority
        />
        <span className="floating-contact__label floating-contact__label--call">Call Us</span>
      </a>
    </div>
  );
}
