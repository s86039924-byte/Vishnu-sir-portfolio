(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Path to the Re-Wise logo sitting inside /public/logo.
__turbopack_context__.s([
    "LOGO",
    ()=>LOGO
]);
const LOGO = '/logo/logo.png';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/layout/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Courses',
        href: '/#courses'
    },
    {
        label: 'Why Us',
        href: '/vidyabhumi_unique'
    },
    {
        label: 'About us',
        href: '/about_us'
    },
    {
        label: 'Dost',
        href: '/dost',
        variant: 'dost'
    },
    {
        label: 'Faculty',
        href: '/#faculty'
    },
    {
        label: 'Testimonials',
        href: '/testimonials'
    },
    {
        label: 'Gallery',
        href: '/galery'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];
function Navigation() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    // Initialize theme from document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme) setTheme(currentTheme);
        }
    }["Navigation.useEffect"], []);
    // Handle scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 4)
            }["Navigation.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    // Handle escape key to close menu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleEscape = {
                "Navigation.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape' && isMobileMenuOpen) {
                        setIsMobileMenuOpen(false);
                    }
                }
            }["Navigation.useEffect.handleEscape"];
            if (isMobileMenuOpen) {
                document.addEventListener('keydown', handleEscape);
                document.body.style.overflow = 'hidden';
            }
            return ({
                "Navigation.useEffect": ()=>{
                    document.removeEventListener('keydown', handleEscape);
                    document.body.style.overflow = 'auto';
                }
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], [
        isMobileMenuOpen
    ]);
    // Toggle theme
    const handleThemeToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navigation.useCallback[handleThemeToggle]": ()=>{
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
            document.documentElement.style.colorScheme = newTheme;
        }
    }["Navigation.useCallback[handleThemeToggle]"], [
        theme
    ]);
    // Close mobile menu
    const closeMobileMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navigation.useCallback[closeMobileMenu]": ()=>{
            setIsMobileMenuOpen(false);
        }
    }["Navigation.useCallback[closeMobileMenu]"], []);
    // Handle backdrop click
    const handleBackdropClick = (e)=>{
        if (e.target === e.currentTarget) {
            closeMobileMenu();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                "data-nav": true,
                className: `site-nav ${isScrolled ? 'scrolled' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container nav-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-brand",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: closeMobileMenu,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGO"],
                                    alt: "Vidya Bhumi Logo",
                                    width: 140,
                                    height: 140,
                                    priority: true,
                                    className: "brand-logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/layout/Navigation.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "nav-desktop",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "menu rw-menu",
                                children: NAV_ITEMS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: item.variant === 'dost' ? 'nav-dost-link' : undefined,
                                            onClick: closeMobileMenu,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    }, item.label, false, {
                                        fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/layout/Navigation.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dost",
                                    className: "nav-mobile-dost",
                                    "aria-label": "Open Vidya Bhumi Dost",
                                    onClick: closeMobileMenu,
                                    children: "Dost"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`,
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                    "aria-label": "Toggle menu",
                                    "aria-expanded": isMobileMenuOpen,
                                    type: "button",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "theme-toggle",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleThemeToggle,
                                        "aria-label": `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
                                        type: "button",
                                        children: theme === 'light' ? '🌙' : '☀️'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/layout/Navigation.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/layout/Navigation.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/layout/Navigation.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-menu-backdrop show",
                onClick: handleBackdropClick,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/components/layout/Navigation.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-menu-panel ${isMobileMenuOpen ? 'show' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mobile-menu-close",
                        onClick: closeMobileMenu,
                        "aria-label": "Close menu",
                        type: "button",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/layout/Navigation.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mobile-menu-list",
                        children: NAV_ITEMS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "mobile-menu-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `mobile-menu-link${item.variant === 'dost' ? ' nav-dost-link' : ''}`,
                                    onClick: closeMobileMenu,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            }, item.label, false, {
                                fileName: "[project]/src/app/components/layout/Navigation.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/layout/Navigation.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/layout/Navigation.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navigation, "XrC1dEnqCJMYmhrWnpIC5/qXqqA=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/animations/ScrollProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollProgress() {
    _s();
    const [w, setW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollProgress.useEffect": ()=>{
            const onScroll = {
                "ScrollProgress.useEffect.onScroll": ()=>{
                    const h = document.documentElement.scrollHeight - window.innerHeight;
                    setW(Math.min(window.scrollY / h * 100, 100));
                }
            }["ScrollProgress.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll);
            return ({
                "ScrollProgress.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["ScrollProgress.useEffect"];
        }
    }["ScrollProgress.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scroll-progress",
        style: {
            width: `${w}%`
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/animations/ScrollProgress.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_s(ScrollProgress, "Fz9fi/Dv7eibdcxfjLd4/GVPLSE=");
_c = ScrollProgress;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/animations/ParticlesBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticlesBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// soft blobs (bigger now)
const SHAPES = [
    {
        w: 340,
        h: 340,
        top: '6%',
        left: '4%',
        blur: 45,
        opacity: 0.22
    },
    {
        w: 420,
        h: 420,
        top: '20%',
        left: '68%',
        blur: 60,
        opacity: 0.2
    },
    {
        w: 320,
        h: 320,
        top: '54%',
        left: '10%',
        blur: 40,
        opacity: 0.16
    },
    {
        w: 380,
        h: 380,
        top: '68%',
        left: '70%',
        blur: 60,
        opacity: 0.14
    },
    {
        w: 260,
        h: 260,
        top: '38%',
        left: '40%',
        blur: 36,
        opacity: 0.12
    }
];
// maths symbols drifting
const MATH_SYMBOLS = [
    {
        text: '∫',
        top: '14%',
        left: '16%',
        dur: 22
    },
    {
        text: 'π',
        top: '30%',
        left: '78%',
        dur: 26
    },
    {
        text: 'Σ',
        top: '58%',
        left: '8%',
        dur: 24
    },
    {
        text: 'dx',
        top: '68%',
        left: '46%',
        dur: 28
    },
    {
        text: 'lim',
        top: '42%',
        left: '60%',
        dur: 30
    }
];
// chemistry orbitals (small)
const CHEM_POINTS = [
    {
        top: '16%',
        left: '52%',
        size: 70
    },
    {
        top: '46%',
        left: '26%',
        size: 60
    },
    {
        top: '62%',
        left: '78%',
        size: 72
    }
];
// physics wave bars
const PHYSICS_BARS = [
    {
        top: '10%',
        left: '-12%',
        width: '38%',
        delay: 0
    },
    {
        top: '46%',
        left: '-6%',
        width: '32%',
        delay: 4
    },
    {
        top: '78%',
        left: '-10%',
        width: '44%',
        delay: 7
    }
];
// mechanics / pulleys
const PULLEYS = [
    {
        top: '24%',
        left: '10%',
        delay: 0
    },
    {
        top: '65%',
        left: '64%',
        delay: 3
    }
];
// bigger chemistry atom clusters
const ATOM_CLUSTERS = [
    {
        top: '12%',
        left: '84%'
    },
    {
        top: '74%',
        left: '6%'
    }
];
function ParticlesBackground() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticlesBackground.useEffect": ()=>setMounted(true)
    }["ParticlesBackground.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rw-bg-layer",
        "aria-hidden": true,
        children: [
            SHAPES.map((shape, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rw-bg-shape",
                    style: {
                        top: shape.top,
                        left: shape.left,
                        width: shape.w,
                        height: shape.h,
                        opacity: shape.opacity,
                        filter: `blur(${shape.blur}px)`,
                        animationDelay: `${index * 2}s`
                    }
                }, `blob-${index}`, false, {
                    fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)),
            MATH_SYMBOLS.map((symbol, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rw-math-symbol",
                    style: {
                        top: symbol.top,
                        left: symbol.left,
                        animationDuration: `${symbol.dur}s`
                    },
                    children: symbol.text
                }, `math-${index}`, false, {
                    fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)),
            CHEM_POINTS.map((chem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rw-chem-orbit",
                    style: {
                        top: chem.top,
                        left: chem.left,
                        width: chem.size,
                        height: chem.size
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rw-chem-core"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rw-chem-electron"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, `chem-${index}`, true, {
                    fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)),
            PHYSICS_BARS.map((bar, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rw-physics-wave",
                    style: {
                        top: bar.top,
                        left: bar.left,
                        width: bar.width,
                        animationDelay: `${bar.delay}s`
                    }
                }, `phys-${index}`, false, {
                    fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)),
            PULLEYS.map((pulley, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rw-phys-pulley",
                    style: {
                        top: pulley.top,
                        left: pulley.left,
                        animationDelay: `${pulley.delay}s`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rw-phys-wheel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rw-phys-rope"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rw-phys-weight"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, `pulley-${index}`, true, {
                    fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)),
            ATOM_CLUSTERS.map((cluster, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rw-chem-atom-cluster",
                    style: {
                        top: cluster.top,
                        left: cluster.left
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chem-node chem-node--1"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chem-node chem-node--2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chem-node chem-node--3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chem-bond chem-bond--1"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chem-bond chem-bond--2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, `atom-${index}`, true, {
                    fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/animations/ParticlesBackground.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(ParticlesBackground, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ParticlesBackground;
var _c;
__turbopack_context__.k.register(_c, "ParticlesBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/animations/StemOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StemOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const items = [
    {
        text: 'E = mc²',
        top: '12%',
        left: '8%',
        size: 24,
        rot: -6
    },
    {
        text: '∫ F · dr',
        top: '28%',
        left: '78%',
        size: 22,
        rot: 8
    },
    {
        text: 'Δx · Δp ≥ ħ/2',
        top: '40%',
        left: '16%',
        size: 20,
        rot: -4
    },
    {
        text: 'PV = nRT',
        top: '62%',
        left: '12%',
        size: 20,
        rot: 5
    },
    {
        text: '∑ f_i = ma',
        top: '54%',
        left: '70%',
        size: 22,
        rot: -3
    },
    {
        text: 'sin²θ + cos²θ = 1',
        top: '72%',
        left: '32%',
        size: 18,
        rot: 2
    },
    {
        text: 'v = u + at',
        top: '18%',
        left: '54%',
        size: 18,
        rot: 10
    },
    {
        text: 'd/dx (e^x) = e^x',
        top: '48%',
        left: '46%',
        size: 18,
        rot: -8
    }
];
const diagrams = [
    {
        top: '18%',
        left: '30%',
        scale: 1.0
    },
    {
        top: '66%',
        left: '58%',
        scale: 0.9
    }
];
function StemOverlay() {
    _s();
    // Inject minimal keyframes once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StemOverlay.useEffect": ()=>{
            const id = 'stem-overlay-kf';
            if (document.getElementById(id)) return;
            const style = document.createElement('style');
            style.id = id;
            style.textContent = `
      @keyframes stemFloat { 
        0% { transform: translateY(0) rotate(var(--rot,0deg)); opacity: 0.22; } 
        50% { transform: translateY(-8px) rotate(calc(var(--rot,0deg) + 2deg)); opacity: 0.3; }
        100% { transform: translateY(6px) rotate(var(--rot,0deg)); opacity: 0.2; }
      }
      @keyframes stemDrift {
        0% { transform: translateX(0); }
        100% { transform: translateX(14px); }
      }
      @keyframes stemPulse {
        0% { transform: scale(var(--scale,1)) rotate(0deg); opacity: 0.08; }
        50% { transform: scale(calc(var(--scale,1) * 1.05)) rotate(1deg); opacity: 0.12; }
        100% { transform: scale(var(--scale,1)) rotate(0deg); opacity: 0.08; }
      }
    `;
            document.head.appendChild(style);
        }
    }["StemOverlay.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: -2,
            pointerEvents: 'none',
            mixBlendMode: 'screen',
            color: 'rgba(226, 232, 240, 0.8)',
            fontFamily: 'var(--font-heading, "Montserrat", sans-serif)'
        },
        children: [
            items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: 'absolute',
                        top: item.top,
                        left: item.left,
                        fontSize: item.size,
                        fontWeight: 700,
                        letterSpacing: 0.4,
                        opacity: 0.24,
                        '--rot': `${item.rot}deg`,
                        animation: 'stemFloat 8s ease-in-out infinite, stemDrift 22s linear infinite',
                        animationDelay: `${i * 0.6}s`,
                        whiteSpace: 'nowrap'
                    },
                    children: item.text
                }, item.text + i, false, {
                    fileName: "[project]/src/app/components/animations/StemOverlay.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)),
            diagrams.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 120 120",
                    style: {
                        position: 'absolute',
                        top: d.top,
                        left: d.left,
                        width: `${120 * d.scale}px`,
                        height: `${120 * d.scale}px`,
                        opacity: 0.1,
                        '--scale': d.scale,
                        animation: 'stemPulse 10s ease-in-out infinite',
                        animationDelay: `${i * 1.2}s`
                    },
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "60",
                            cy: "60",
                            r: "36"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/StemOverlay.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            y1: "60",
                            x2: "108",
                            y2: "60"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/StemOverlay.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "60",
                            y1: "12",
                            x2: "60",
                            y2: "108"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/StemOverlay.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M24 92 C48 64, 72 64, 96 92"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/StemOverlay.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "60,18 54,30 66,30"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/animations/StemOverlay.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, `diag-${i}`, true, {
                    fileName: "[project]/src/app/components/animations/StemOverlay.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/animations/StemOverlay.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(StemOverlay, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = StemOverlay;
var _c;
__turbopack_context__.k.register(_c, "StemOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/layout/ScrollManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ScrollManager() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollManager.useEffect": ()=>{
            // Disable native restoration
            if ('scrollRestoration' in history) {
                const prev = history.scrollRestoration;
                history.scrollRestoration = 'manual';
                return ({
                    "ScrollManager.useEffect": ()=>{
                        history.scrollRestoration = prev;
                    }
                })["ScrollManager.useEffect"];
            }
        }
    }["ScrollManager.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollManager.useEffect": ()=>{
            function onClick(e) {
                const el = e.target?.closest('a[href*="#"]');
                if (!el) return;
                const href = el.getAttribute('href') || '';
                if (!href.includes('#')) return;
                e.preventDefault();
                const id = href.split('#')[1];
                if (!id) return;
                const NAV_H = 72;
                // If we are NOT on the homepage, navigate there first with the hash
                if (pathname !== '/') {
                    router.push(`/#${id}`);
                    return;
                }
                // We are on '/', do smooth scroll
                const target = document.getElementById(id);
                if (target) {
                    const y = target.getBoundingClientRect().top + window.scrollY - NAV_H;
                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                }
            }
            document.addEventListener('click', onClick);
            return ({
                "ScrollManager.useEffect": ()=>document.removeEventListener('click', onClick)
            })["ScrollManager.useEffect"];
        }
    }["ScrollManager.useEffect"], [
        pathname,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollManager.useEffect": ()=>{
            // If page loads with a hash, offset scroll
            const { hash } = window.location;
            if (!hash) return;
            const id = hash.slice(1);
            const target = document.getElementById(id);
            const NAV_H = 72;
            if (target) {
                const y = target.getBoundingClientRect().top + window.scrollY - NAV_H;
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        }
    }["ScrollManager.useEffect"], []);
    return null;
}
_s(ScrollManager, "TD2AaKQ2GrmFF3SqOo/Px5fygwQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ScrollManager;
var _c;
__turbopack_context__.k.register(_c, "ScrollManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bb563856._.js.map