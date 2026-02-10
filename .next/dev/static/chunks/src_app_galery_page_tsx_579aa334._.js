(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/galery/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GaleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CATEGORY_ORDER = [
    'classroom',
    'celebration',
    'instruction',
    'testimonial'
];
const GALLERY_DATA = {
    classroom: [
        {
            id: 'cls-1',
            title: 'Focused Learning',
            caption: 'Students solving problems together in class.',
            image: '/images/image_4.png'
        },
        {
            id: 'cls-2',
            title: 'Board Session',
            caption: 'Step-by-step explanation on core concepts.',
            image: '/images/welcome.jpg'
        },
        {
            id: 'cls-3',
            title: 'Doubt Corner',
            caption: 'Mentors helping learners one-on-one.',
            image: '/images/image_3.png'
        },
        {
            id: 'cls-4',
            title: 'Practice Hour',
            caption: 'Routine revision and timed problem-solving.',
            image: '/images/image_.png'
        }
    ],
    celebration: [
        {
            id: 'cel-1',
            title: 'Achievement Day',
            caption: 'Celebrating milestones with students and mentors.',
            image: '/images/image_3.png'
        },
        {
            id: 'cel-2',
            title: 'Festive Moments',
            caption: 'A joyful environment beyond academics.',
            image: '/images/image_4.png'
        },
        {
            id: 'cel-3',
            title: 'Recognition Event',
            caption: 'Honoring consistency and performance.',
            image: '/images/welcome.jpg'
        },
        {
            id: 'cel-4',
            title: 'Team Spirit',
            caption: 'Shared moments that build confidence.',
            image: '/images/image_.png'
        }
    ],
    instruction: [
        {
            id: 'ins-1',
            title: 'Concept Breakdown',
            caption: 'Structured teaching with practical examples.',
            youtubeId: 'Kj4IpahL_eg'
        },
        {
            id: 'ins-2',
            title: 'Live Explanation',
            caption: 'High-energy sessions with real-time interaction.',
            youtubeId: 'ZCbG0UdgtEM'
        },
        {
            id: 'ins-3',
            title: 'Worksheet Review',
            caption: 'Performance feedback for every learner.',
            image: '/images/image_.png'
        },
        {
            id: 'ins-4',
            title: 'Revision Sprint',
            caption: 'Fast recap rounds before tests.',
            image: '/images/image_3.png'
        }
    ],
    testimonial: [
        {
            id: 'tes-1',
            title: 'Student Feedback',
            caption: 'Stories of confidence and progress.',
            image: '/images/image_.png'
        },
        {
            id: 'tes-2',
            title: 'Parent Voice',
            caption: 'Trust built through visible outcomes.',
            image: '/images/welcome.jpg'
        },
        {
            id: 'tes-3',
            title: 'Mentor Note',
            caption: 'Consistency and discipline in every batch.',
            image: '/images/image_4.png'
        },
        {
            id: 'tes-4',
            title: 'Result Story',
            caption: 'Positive journeys from classroom to rank list.',
            image: '/images/image_3.png'
        }
    ]
};
function wrapIndex(index, length) {
    return (index + length) % length;
}
function CardMedia({ item }) {
    if (item.image) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: item.image,
            alt: item.title
        }, void 0, false, {
            fileName: "[project]/src/app/galery/page.tsx",
            lineNumber: 131,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "galery-video-placeholder",
        "aria-label": `${item.title} video`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Video Lesson"
        }, void 0, false, {
            fileName: "[project]/src/app/galery/page.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/galery/page.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c = CardMedia;
function GaleryPage() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('classroom');
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVideoPlaying, setIsVideoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentItems = GALLERY_DATA[activeCategory];
    const visibleCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GaleryPage.useMemo[visibleCards]": ()=>{
            const total = currentItems.length;
            return {
                left: currentItems[wrapIndex(activeIndex - 1, total)],
                center: currentItems[wrapIndex(activeIndex, total)],
                right: currentItems[wrapIndex(activeIndex + 1, total)]
            };
        }
    }["GaleryPage.useMemo[visibleCards]"], [
        activeIndex,
        currentItems
    ]);
    const changeCategory = (category)=>{
        setActiveCategory(category);
        setActiveIndex(0);
        setIsVideoPlaying(false);
    };
    const showPrev = ()=>{
        setActiveIndex((prev)=>wrapIndex(prev - 1, currentItems.length));
        setIsVideoPlaying(false);
    };
    const showNext = ()=>{
        setActiveIndex((prev)=>wrapIndex(prev + 1, currentItems.length));
        setIsVideoPlaying(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "galery-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "galery-backdrop",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/galery/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container galery-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "galery-shell",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "galery-eyebrow",
                            children: "galery"
                        }, void 0, false, {
                            fileName: "[project]/src/app/galery/page.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "galery-title",
                            children: "My Visual Diary"
                        }, void 0, false, {
                            fileName: "[project]/src/app/galery/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "galery-subtitle",
                            children: "Moments from Vidya Bhumi classrooms and student journeys."
                        }, void 0, false, {
                            fileName: "[project]/src/app/galery/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "galery-options",
                            role: "tablist",
                            "aria-label": "Gallery categories",
                            children: CATEGORY_ORDER.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": activeCategory === category,
                                    className: `galery-chip${activeCategory === category ? ' is-active' : ''}`,
                                    onClick: ()=>changeCategory(category),
                                    children: category
                                }, category, false, {
                                    fileName: "[project]/src/app/galery/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/galery/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "galery-stage",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "galery-card galery-card--side galery-card--left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardMedia, {
                                        item: visibleCards.left
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/galery/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/galery/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "galery-card galery-card--main",
                                    children: [
                                        visibleCards.center.youtubeId && isVideoPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "galery-video-wrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                src: `https://www.youtube.com/embed/${visibleCards.center.youtubeId}?autoplay=1&rel=0`,
                                                title: visibleCards.center.title,
                                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                                referrerPolicy: "strict-origin-when-cross-origin",
                                                allowFullScreen: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/galery/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/galery/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardMedia, {
                                                    item: visibleCards.center
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/galery/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this),
                                                visibleCards.center.youtubeId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "galery-video-play",
                                                    "aria-label": "Play instruction video",
                                                    onClick: ()=>setIsVideoPlaying(true),
                                                    children: "▶"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/galery/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "galery-card__overlay",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: visibleCards.center.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/galery/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: visibleCards.center.caption
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/galery/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/galery/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/galery/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "galery-card galery-card--side galery-card--right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardMedia, {
                                        item: visibleCards.right
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/galery/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/galery/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/galery/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "galery-controls",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: showPrev,
                                    "aria-label": "Previous image",
                                    children: "←"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/galery/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: showNext,
                                    "aria-label": "Next image",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/galery/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/galery/page.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/galery/page.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/galery/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/galery/page.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_s(GaleryPage, "8vLDMJvpUu2tHR8YaW75uQELAgY=");
_c1 = GaleryPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CardMedia");
__turbopack_context__.k.register(_c1, "GaleryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_galery_page_tsx_579aa334._.js.map