(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_09ed77d7._.js", {

"[project]/src/app/components/cursor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CustomCursor": (()=>CustomCursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CustomCursor() {
    _s();
    const [cursorVariant, setCursorVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("default");
    const [cursorColor, setCursorColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#000000");
    const springConfig = {
        stiffness: 300,
        damping: 20,
        mass: 0.1
    };
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(0, springConfig);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(0, springConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    const { clientX, clientY } = e;
                    mouseX.set(clientX - 12);
                    mouseY.set(clientY - 12);
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            const handleMouseEnter = {
                "CustomCursor.useEffect.handleMouseEnter": (e)=>{
                    const target = e.target;
                    const tagName = target.tagName.toLowerCase();
                    if (tagName === "a") {
                        setCursorVariant("link");
                    } else if (tagName === "button") {
                        setCursorVariant("button");
                    } else {
                        setCursorVariant("hover");
                    }
                    const computedStyle = window.getComputedStyle(target);
                    const bgColor = computedStyle.backgroundColor;
                    const rgb = bgColor.match(/\d+/g);
                    if (rgb && rgb.length >= 3) {
                        const luminance = (0.299 * Number(rgb[0]) + 0.587 * Number(rgb[1]) + 0.114 * Number(rgb[2])) / 255;
                        setCursorColor(luminance > 0.5 ? "#000000" : "#f2f2f2");
                    }
                }
            }["CustomCursor.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "CustomCursor.useEffect.handleMouseLeave": ()=>{
                    setCursorVariant("default");
                    setCursorColor("#000000");
                }
            }["CustomCursor.useEffect.handleMouseLeave"];
            const interactiveElements = document.querySelectorAll("a, button");
            window.addEventListener("mousemove", handleMouseMove);
            interactiveElements.forEach({
                "CustomCursor.useEffect": (el)=>{
                    el.addEventListener("mouseenter", handleMouseEnter);
                    el.addEventListener("mouseleave", handleMouseLeave);
                }
            }["CustomCursor.useEffect"]);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    interactiveElements.forEach({
                        "CustomCursor.useEffect": (el)=>{
                            el.removeEventListener("mouseenter", handleMouseEnter);
                            el.removeEventListener("mouseleave", handleMouseLeave);
                        }
                    }["CustomCursor.useEffect"]);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        mouseX,
        mouseY
    ]);
    const cursorVariants = {
        default: {
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "1px solid",
            borderColor: cursorColor,
            backgroundColor: "transparent",
            transition: {
                duration: 0.2
            }
        },
        hover: {
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "2px solid",
            borderColor: cursorColor,
            backgroundColor: "transparent",
            transition: {
                duration: 0.2
            }
        },
        link: {
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "1px dashed",
            borderColor: cursorColor,
            backgroundColor: "transparent",
            transition: {
                duration: 0.2
            }
        },
        button: {
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "1px solid",
            borderColor: cursorColor,
            boxShadow: `0 0 0 1px ${cursorColor}`,
            backgroundColor: "transparent",
            transition: {
                duration: 0.2
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed top-0 left-0 pointer-events-none z-50 hidden md:block",
        style: {
            x: mouseX,
            y: mouseY
        },
        variants: cursorVariants,
        animate: cursorVariant,
        transition: {
            type: "spring",
            ...springConfig
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/cursor.tsx",
        lineNumber: 120,
        columnNumber: 9
    }, this);
}
_s(CustomCursor, "evp37sVdMztZNAPpTi8pb5DV564=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/scroll-section.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollSection": (()=>ScrollSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollSection({ children, className = "", as = "section" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.2,
        0.8,
        1
    ], [
        100,
        0,
        0,
        -100
    ]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5,
        1
    ], [
        0.95,
        1,
        0.95
    ]);
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(as);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ref: ref,
        style: {
            y,
            scale
        },
        className: `relative min-h-[80vh] py-16 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/scroll-section.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(ScrollSection, "o62k0cVmIwEteibPd5qeoX9/Zjg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ScrollSection;
var _c;
__turbopack_context__.k.register(_c, "ScrollSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/soju-manga.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/soju-manga.6f30e9bc.webp");}}),
"[project]/src/assets/images/soju-manga.webp.mjs { IMAGE => \"[project]/src/assets/images/soju-manga.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$manga$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/soju-manga.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$manga$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 543,
    height: 1822,
    blurDataURL: "data:image/webp;base64,UklGRuAAAABXRUJQVlA4TNQAAAAvAcABEM1VICICHgiAAAAAAICCrAUAAAAAAAAASAgAAAAAAAAAAAAAAAAAgCAAIEAAAAAAAA8EkAAAAADg/P8BAAAAAAAwDAAAAAAAAAAAAAAAAAAAAAAAADADAIzNQGYeCAQBAAAAwPkPAAAAAAAMGAAAAAAAAAAAAAAAAAAAAAAAAAAAxjCDhwl4DwSbAAAAAOD8xwlQAABQAAAAAIAQAAAAAAQAAAAAAAAAAAAAAAAAAABwgOzj4y9+SzcpA0OgS7jkXTctdUugB1WQbriGyfCGGw==",
    blurWidth: 2,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/soju-pessego.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/soju-pessego.daf1dc3f.webp");}}),
"[project]/src/assets/images/soju-pessego.webp.mjs { IMAGE => \"[project]/src/assets/images/soju-pessego.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$pessego$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/soju-pessego.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$pessego$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 543,
    height: 1822,
    blurDataURL: "data:image/webp;base64,UklGRuMAAABXRUJQVlA4TNcAAAAvAcABEM1VICICHgggAQAAAIBjDJgBjAEAAAAAALBhAAAAAAAAAAAAAAAAAMAMAAAMMAAAAACABwJIAAAAAHD+CwAAAACAwQAAAAAAAAAAAAAAAAAAAAAAAAAAMAYAwH68Nw8EpAYAAADg/AEAAAAAAECAAAAAAAAAAAAAAAAAAAAAAAAAAHgAiACsuGjigWATAAAAAJz/OAEKAAAKAAAAABACAAAAgAAAAAAAAAAAAAAAAAAAAAAOkL28/cVH6jykw0jThbmk3mArF0/gg1uoHpzFqLwmAwA=",
    blurWidth: 2,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/soju-maca-verde.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/soju-maca-verde.c7073539.webp");}}),
"[project]/src/assets/images/soju-maca-verde.webp.mjs { IMAGE => \"[project]/src/assets/images/soju-maca-verde.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$maca$2d$verde$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/soju-maca-verde.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$maca$2d$verde$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 543,
    height: 1822,
    blurDataURL: "data:image/webp;base64,UklGRuIAAABXRUJQVlA4TNYAAAAvAcABEM1VICICHgggAQAAAAAPBswAAMwAAAAAAJgxAAAAAAAAAAAAAAAAwIABAAAGGAAEAACABwJIAAAAAHD+rwcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsB+8eQ8EmwAAAADg/AEAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQGIJToPBJsAAAAA4PzHCVAAAFAAAAAAgBAAAAAABAAAAAAAAAAAAAAAAAAAAHCA7OXtFF+li5AOI00XcfmzoVZuniwL+AAegphsr6cB",
    blurWidth: 2,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/soju-morango.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/soju-morango.3cde0133.webp");}}),
"[project]/src/assets/images/soju-morango.webp.mjs { IMAGE => \"[project]/src/assets/images/soju-morango.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$morango$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/soju-morango.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$morango$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 543,
    height: 1822,
    blurDataURL: "data:image/webp;base64,UklGRuEAAABXRUJQVlA4TNUAAAAvAcABEM1VICICHgggAQAAAICBA4sBAAAAAAAAAGYYAAAAAAAAAAAAAAAAAACAYQADDAAYAADAAwGpAQAAADh/FwAAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAgAwAAIPHAi/FAsAkAAAAAzh8AAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAACABQATg3ALxQLAJAAAAAM5/nAAFAAAFAAAAAAgBAAAAQAAAAAAAAAAAAAAAAAAAAAAHyDre/8dptTuiGZjOuAu8zCirTME8oBIY0d2eVwYA",
    blurWidth: 2,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/soju-iogurte.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/soju-iogurte.cb8fb465.webp");}}),
"[project]/src/assets/images/soju-iogurte.webp.mjs { IMAGE => \"[project]/src/assets/images/soju-iogurte.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$iogurte$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/soju-iogurte.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$iogurte$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 543,
    height: 1822,
    blurDataURL: "data:image/webp;base64,UklGRuAAAABXRUJQVlA4TNQAAAAvAcABEM1VICICHgiAAAAAAICAhQJAAgAAAAAAkAgAAAAAAAAAAAAAAAABAQAAQEAAQAAAAA8EgwYAAADg/B8AAAAAAA4BAAAAAAAAAAAAAAAAAAAAAAAAAABAAgBRogl5INgEAAAAAOcPcAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAFEAIAGkBeSDYBAAAAADnP06AAgCAAgAAAACEAAAAACAAAAAAAAAAAAAAAAAAAACAA2Qtr/dx2dooCQwOnbIXb9a/laknIwjxfUBBe3osDA==",
    blurWidth: 2,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/soju-blueberry.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/soju-blueberry.cffe4ad1.webp");}}),
"[project]/src/assets/images/soju-blueberry.webp.mjs { IMAGE => \"[project]/src/assets/images/soju-blueberry.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$blueberry$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/soju-blueberry.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$blueberry$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 543,
    height: 1822,
    blurDataURL: "data:image/webp;base64,UklGRuIAAABXRUJQVlA4TNYAAAAvAcABEM1VICICHggGDQAAAIABAkQQDgAAAAAAAJAgAAAAAAAAAAAAAAAAAAAgCAAEEADgAAAAHgggAQAAAMD5PwAAAAwGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADADBu+Yx4IIAEAAADA+TMAAAAAAACAAQMAAAAAAAAAAAAAAAAAAAAAMDAAYIOZXWAeCDYBAAAAwPmPE6AAAKAAAAAAACEAAAAACAAAAAAAAAAAAAAAAAAAAOAAWcTbf1yXtlIKjOx1Ki9k95mWu+UHgQI3ME1neMIN",
    blurWidth: 2,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/soju-original.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/soju-original.8f09156a.webp");}}),
"[project]/src/assets/images/soju-original.webp.mjs { IMAGE => \"[project]/src/assets/images/soju-original.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$original$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/soju-original.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$original$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 544,
    height: 1820,
    blurDataURL: "data:image/webp;base64,UklGRuEAAABXRUJQVlA4TNUAAAAvAcABEM1VICICHgggAQAAAIABHvMADMAAABgAAIAAAAAAAAAAAAAAAAAAAAAAwwAYAAA8AACAB4JNAAAAAHD+cwAAEAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIHAB1gQcCSAAAAABw/uwBAAAAAAYAAwAAAAAAAAAAAAAAAAAAAAAAYBgAMMDeuAEPBJsAAAAA4PyHCnAAAIgAAAAAAAkAAAAAAgAAAAAAAAAAAAAAAAAAAOCALOcfVAYyvsNzw0FDf2BWS5VtegkkRm7ZLdrhGTcA",
    blurWidth: 2,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/products-section.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductsSection": (()=>ProductsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$manga$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$manga$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/soju-manga.webp.mjs { IMAGE => "[project]/src/assets/images/soju-manga.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$pessego$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$pessego$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/soju-pessego.webp.mjs { IMAGE => "[project]/src/assets/images/soju-pessego.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$maca$2d$verde$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$maca$2d$verde$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/soju-maca-verde.webp.mjs { IMAGE => "[project]/src/assets/images/soju-maca-verde.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$morango$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$morango$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/soju-morango.webp.mjs { IMAGE => "[project]/src/assets/images/soju-morango.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$iogurte$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$iogurte$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/soju-iogurte.webp.mjs { IMAGE => "[project]/src/assets/images/soju-iogurte.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$blueberry$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$blueberry$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/soju-blueberry.webp.mjs { IMAGE => "[project]/src/assets/images/soju-blueberry.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$original$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$original$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/soju-original.webp.mjs { IMAGE => "[project]/src/assets/images/soju-original.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const products = [
    {
        name: "Original",
        description: 'A essência do soju tradicional, feito com água alcalina pura, proporciona uma suavidade única ao paladar. "Chum Churum" significa "Como da Primeira Vez", refletindo o frescor e a novidade em cada gole.',
        color: "#EBF2DC",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$original$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$original$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ingredients: "Água mineral pura, destilado de arroz e tapioca, xarope de milho de alta frutose, adoçante artificial.",
        details: {
            type: "Destilado Especial / Soju",
            abv: "16,5%",
            bottleSize: "375ml",
            characteristics: "Feito com água alcalina, proporciona uma suavidade única ao paladar, ideal para quem aprecia o verdadeiro sabor do soju."
        }
    },
    {
        name: "Manga",
        description: "Um deleite suave e adocicado que lembra um doce de manga recém-colhido. Seu aroma envolvente torna cada gole uma experiência inesquecível.",
        color: "#F2C4C4",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$manga$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$manga$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ingredients: "Água purificada, destilado de arroz e tapioca, suco de manga, aroma de manga, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics: "Sabor tropical marcante com aroma frutado intenso, perfeito para degustação pura ou em coquetéis."
        }
    },
    {
        name: "Pêssego",
        description: "Um deleite suave e adocicado que lembra um doce de pêssego recém-colhido. Seu aroma envolvente torna cada gole uma experiência inesquecível.",
        color: "#F2BFBB",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$pessego$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$pessego$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ingredients: "Água purificada, destilado de arroz e tapioca, suco de pêssego, aroma de pêssego, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics: "Suavidade e doçura em perfeito equilíbrio, com aroma persistente de pêssego maduro."
        }
    },
    {
        name: "Maçã Verde",
        description: "O equilíbrio perfeito entre doce e azedo, com o frescor natural da maçã verde. Remete a uma bala de maçã com um toque sofisticado, ideal para adultos que amam sabores intensos.",
        color: "#CDD9A3",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$maca$2d$verde$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$maca$2d$verde$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ingredients: "Água purificada, destilado de arroz e tapioca, suco de maçã, aroma de maçã, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics: "Acidez refrescante típica da maçã verde com finalização levemente adocicada."
        }
    },
    {
        name: "Morango",
        description: "Sabor marcante e suave de morango, com um aroma intenso que desperta os sentidos. Uma escolha perfeita para quem ama frutas vermelhas.",
        color: "#F2C2DC",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$morango$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$morango$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ingredients: "Água purificada, destilado de arroz e tapioca, suco de morango, aroma de morango, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics: "Doçura natural e aroma intenso de morango fresco, com finalização equilibrada."
        }
    },
    {
        name: "Iogurte",
        description: "Leve e refrescante, este soju combina a doçura sutil do iogurte com notas cremosas de laranja e pêssego. Uma versão elegante de um orange creamsicle, ideal puro ou com pratos como Samgyeopsal (churrasco coreano).",
        color: "#F2E6D8",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$iogurte$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$iogurte$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ingredients: "Água purificada, destilado de arroz e tapioca, aroma de iogurte, aroma de laranja, aroma de pêssego, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics: "Textura cremosa com notas de cítricos, perfeito para harmonização com pratos da culinária coreana."
        }
    },
    {
        name: "Blueberry",
        description: "Desfrute do sabor suave e adocicado do blueberry, com uma doçura natural que encanta sem o amargor típico do soju tradicional. Refrescante e delicioso, é uma opção que conquista logo no primeiro gole.",
        color: "#E7DCF2",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$blueberry$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$blueberry$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ingredients: "Água purificada, destilado de arroz e tapioca, suco de blueberry, aroma de blueberry, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics: "Sabor sofisticado de frutas vermelhas com notas doces e baixa acidez."
        }
    }
];
function ProductsSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentProduct, setCurrentProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const imageX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const imageY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    const smoothProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        damping: 50,
        stiffness: 400
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        1
    ], [
        "0%",
        `${-(products.length - 1) * 100}%`
    ]);
    const backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, products.map({
        "ProductsSection.useTransform[backgroundColor]": (_, i)=>i / (products.length - 1)
    }["ProductsSection.useTransform[backgroundColor]"]), products.map({
        "ProductsSection.useTransform[backgroundColor]": (product)=>product.color
    }["ProductsSection.useTransform[backgroundColor]"]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsSection.useEffect": ()=>{
            const unsubscribe = smoothProgress.on("change", {
                "ProductsSection.useEffect.unsubscribe": (latest)=>{
                    const productIndex = Math.round(latest * (products.length - 1));
                    setCurrentProduct(productIndex);
                }
            }["ProductsSection.useEffect.unsubscribe"]);
            return ({
                "ProductsSection.useEffect": ()=>unsubscribe()
            })["ProductsSection.useEffect"];
        }
    }["ProductsSection.useEffect"], [
        smoothProgress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsSection.useEffect": ()=>{
            const handleMouseMove = {
                "ProductsSection.useEffect.handleMouseMove": (event)=>{
                    const containerRect = sectionRef.current?.getBoundingClientRect();
                    if (containerRect) {
                        const x = (event.clientX - containerRect.left - containerRect.width / 2) / 20;
                        const y = (event.clientY - containerRect.top - containerRect.height / 2) / 20;
                        imageX.set(x);
                        imageY.set(y);
                    }
                }
            }["ProductsSection.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "ProductsSection.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["ProductsSection.useEffect"];
        }
    }["ProductsSection.useEffect"], [
        imageX,
        imageY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "relative h-[600vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "sticky top-0 h-screen overflow-hidden flex items-center justify-center",
            style: {
                backgroundColor
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative w-full h-full",
                style: {
                    y
                },
                children: products.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-0 left-0 w-full h-screen flex items-center justify-center",
                        style: {
                            y: `${index * 100}%`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "md:w-1/2 text-left pr-6",
                                    initial: {
                                        x: -50
                                    },
                                    animate: {
                                        x: currentProduct === index ? 0 : -50
                                    },
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/products-section.tsx",
                                            lineNumber: 219,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-xl mb-6 leading-relaxed",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/products-section.tsx",
                                            lineNumber: 222,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4 mb-6 text-sm md:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: product.details.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/products-section.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        product.details.abv,
                                                        " ABV"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/products-section.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: product.details.bottleSize
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/products-section.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/products-section.tsx",
                                            lineNumber: 225,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-2",
                                            children: "Características"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/products-section.tsx",
                                            lineNumber: 232,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base mb-6",
                                            children: product.details.characteristics
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/products-section.tsx",
                                            lineNumber: 235,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-2",
                                            children: "Ingredientes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/products-section.tsx",
                                            lineNumber: 238,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base",
                                            children: product.ingredients
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/products-section.tsx",
                                            lineNumber: 241,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/products-section.tsx",
                                    lineNumber: 208,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "md:w-1/2 flex justify-center items-center",
                                    initial: {
                                        scale: 0.8
                                    },
                                    animate: {
                                        scale: currentProduct === index ? 1 : 0.8
                                    },
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut"
                                    },
                                    style: {
                                        x: imageX,
                                        y: imageY
                                    },
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: product.image,
                                        alt: `Garrafa de soju sabor ${product.name}`,
                                        width: 300,
                                        height: 800,
                                        className: "h-[80vh] w-auto object-contain drop-shadow-xl",
                                        priority: index === 0,
                                        loading: index === 0 ? "eager" : "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/products-section.tsx",
                                        lineNumber: 260,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/products-section.tsx",
                                    lineNumber: 246,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/products-section.tsx",
                            lineNumber: 207,
                            columnNumber: 29
                        }, this)
                    }, product.name, false, {
                        fileName: "[project]/src/app/components/products-section.tsx",
                        lineNumber: 202,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/products-section.tsx",
                lineNumber: 200,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/products-section.tsx",
            lineNumber: 196,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/products-section.tsx",
        lineNumber: 195,
        columnNumber: 9
    }, this);
}
_s(ProductsSection, "IidMU+nRDDWx3p0j6csMzp8xXL8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ProductsSection;
var _c;
__turbopack_context__.k.register(_c, "ProductsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Footer() {
    _s();
    const currentYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Footer.useMemo[currentYear]": ()=>new Date().getFullYear()
    }["Footer.useMemo[currentYear]"], []);
    const linkClasses = "hover:opacity-70 transition-opacity text-gray-700";
    const navItems = [
        {
            href: "/",
            label: "Home",
            title: "Página Inicial - Soju Brasil"
        },
        {
            href: "#sobre",
            label: "Sobre",
            title: "Sobre o Soju Chum Churum - Soju Brasil"
        },
        {
            href: "#produtos",
            label: "Produtos",
            title: "Conheça nossos sabores de Soju - Soju Brasil"
        },
        {
            href: "#onde-encontrar",
            label: "Onde Encontrar",
            title: "Onde Comprar Soju Chum Churum - Soju Brasil"
        }
    ];
    const flavors = [
        "Blueberry",
        "Iogurte",
        "Maçã Verde",
        "Manga",
        "Morango",
        "Pêssego"
    ];
    const legalLinks = [
        {
            href: "/termos",
            label: "Termos",
            title: "Termos de Serviço - Soju Brasil"
        },
        {
            href: "/privacidade",
            label: "Privacidade",
            title: "Política de Privacidade - Soju Brasil"
        },
        {
            href: "/cookies",
            label: "Cookies",
            title: "Política de Cookies - Soju Brasil"
        }
    ];
    const socialLinks = [
        {
            href: "https://instagram.com/sojubrasil",
            label: "Instagram",
            title: "Soju Brasil no Instagram"
        },
        {
            href: "https://facebook.com/sojubrasil",
            label: "Facebook",
            title: "Soju Brasil no Facebook"
        },
        {
            href: "https://x.com/sojubrasil",
            label: "Twitter",
            title: "Soju Brasil no Twitter (X)"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-24 px-4 border-t border-gray-100 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-20 text-center md:text-left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-6xl md:text-8xl font-bold tracking-tighter uppercase text-gray-900",
                        children: "Soju Chum Churum"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/footer.tsx",
                        lineNumber: 79,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/footer.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Navegação Principal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4",
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: linkClasses,
                                            title: item.title,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/footer.tsx",
                                            lineNumber: 89,
                                            columnNumber: 37
                                        }, this)
                                    }, item.label, false, {
                                        fileName: "[project]/src/app/components/footer.tsx",
                                        lineNumber: 88,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/footer.tsx",
                                lineNumber: 86,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/footer.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Produtos Soju Chum Churum",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4",
                                children: flavors.map((flavor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            className: linkClasses,
                                            title: `Soju Chum Churum Sabor ${flavor} - Soju Brasil`,
                                            children: [
                                                "Soju ",
                                                flavor
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/footer.tsx",
                                            lineNumber: 105,
                                            columnNumber: 37
                                        }, this)
                                    }, flavor, false, {
                                        fileName: "[project]/src/app/components/footer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/footer.tsx",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/footer.tsx",
                            lineNumber: 101,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Informações Legais",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4",
                                children: legalLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: linkClasses,
                                            title: link.title,
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/footer.tsx",
                                            lineNumber: 121,
                                            columnNumber: 37
                                        }, this)
                                    }, link.label, false, {
                                        fileName: "[project]/src/app/components/footer.tsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/footer.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/footer.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Redes Sociais",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4",
                                children: socialLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: linkClasses,
                                            title: link.title,
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/footer.tsx",
                                            lineNumber: 137,
                                            columnNumber: 37
                                        }, this)
                                    }, link.label, false, {
                                        fileName: "[project]/src/app/components/footer.tsx",
                                        lineNumber: 136,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/footer.tsx",
                                lineNumber: 134,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/footer.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/footer.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 text-gray-500 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 md:mb-0",
                            children: [
                                "© ",
                                currentYear,
                                " Soju Brasil. Todos os direitos reservados. Designed by",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://takk.ag",
                                    className: linkClasses,
                                    title: "Design por Takk™ Innovate Studio",
                                    children: "Takk™ Innovate Studio"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/footer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 25
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/footer.tsx",
                            lineNumber: 153,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "opacity-70",
                                children: "Beba com moderação. Venda proibida para menores de 18 anos."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/footer.tsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/footer.tsx",
                            lineNumber: 165,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/footer.tsx",
                    lineNumber: 152,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/footer.tsx",
            lineNumber: 77,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/footer.tsx",
        lineNumber: 76,
        columnNumber: 9
    }, this);
}
_s(Footer, "kOfHOst7R1oiBCGCRVNMfPOi0HI=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/cookie-consent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CookieConsent": (()=>CookieConsent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CookieConsent() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieConsent.useEffect": ()=>{
            const consent = localStorage.getItem("cookie-consent");
            if (!consent) {
                setIsVisible(true);
            }
        }
    }["CookieConsent.useEffect"], []);
    const handleAccept = ()=>{
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                y: 100,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            exit: {
                y: 100,
                opacity: 0
            },
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            },
            className: "fixed bottom-0 left-0 right-0 z-50 p-4",
            role: "dialog",
            "aria-labelledby": "cookie-consent-title",
            "aria-describedby": "cookie-consent-description",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto bg-white border border-gray-100 rounded-lg shadow-sm p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            id: "cookie-consent-description",
                            className: "text-sm mb-4 md:mb-0 md:mr-4 text-gray-700",
                            children: [
                                "Utilizamos cookies para melhorar sua experiência. Você concorda com nossa",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cookies",
                                    className: "underline hover:text-gray-600 transition-colors",
                                    title: "Política de Cookies",
                                    children: "Política de Cookies"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/cookie-consent.tsx",
                                    lineNumber: 43,
                                    columnNumber: 33
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/cookie-consent.tsx",
                            lineNumber: 37,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAccept,
                                className: "px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                                "aria-label": "Aceitar cookies",
                                children: "Aceitar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cookie-consent.tsx",
                                lineNumber: 53,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/cookie-consent.tsx",
                            lineNumber: 52,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/cookie-consent.tsx",
                    lineNumber: 36,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/cookie-consent.tsx",
                lineNumber: 35,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/cookie-consent.tsx",
            lineNumber: 25,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/cookie-consent.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_s(CookieConsent, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = CookieConsent;
var _c;
__turbopack_context__.k.register(_c, "CookieConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/smooth-scroll.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SmoothScroll": (()=>SmoothScroll)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SmoothScroll() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                smoothTouch: false,
                touchMultiplier: 1.5,
                infinite: false
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    lenis.destroy();
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return null;
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/soju-hero-left.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/soju-hero-left.aecdcfba.webp");}}),
"[project]/src/assets/images/soju-hero-left.webp.mjs { IMAGE => \"[project]/src/assets/images/soju-hero-left.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$left$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/soju-hero-left.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$left$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 749,
    height: 2530,
    blurDataURL: "data:image/webp;base64,UklGRuMAAABXRUJQVlA4TNcAAAAvAcABEM1VICICHgggAQAAAADjzcwzAAAAAAADAAAAAAAAAAAAAAAAAAAYAIAYAAAAHgAAAACABwJIAAAAAHD+GwDAAwAAGGAAAAAAAAAAAAAAAAAAAAAAwAAAYBgGADxsCA8EkAAAAADg/MEAAAAAAAAGwAAAAAAAAAAAAAAAAAAAAAAAAGbDAEDDNmgPBJAAAAAA4PzbGxAAANgAAAAAwAwAAAAADAAAAAAAAAAAAAAAAAAAAARwjvJWJCsrOsLvt/+mjG8dmDBlupHpQaDJNHTx6BTKBQA=",
    blurWidth: 2,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/images/soju-hero-right.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/soju-hero-right.aecdcfba.webp");}}),
"[project]/src/assets/images/soju-hero-right.webp.mjs { IMAGE => \"[project]/src/assets/images/soju-hero-right.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$right$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images/soju-hero-right.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$right$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 749,
    height: 2530,
    blurDataURL: "data:image/webp;base64,UklGRuMAAABXRUJQVlA4TNcAAAAvAcABEM1VICICHgggAQAAAADjzcwzAAAAAAADAAAAAAAAAAAAAAAAAAAYAIAYAAAAHgAAAACABwJIAAAAAHD+GwDAAwAAGGAAAAAAAAAAAAAAAAAAAAAAwAAAYBgGADxsCA8EkAAAAADg/MEAAAAAAAAGwAAAAAAAAAAAAAAAAAAAAAAAAGbDAEDDNmgPBJAAAAAA4PzbGxAAANgAAAAAwAwAAAAADAAAAAAAAAAAAAAAAAAAAARwjvJWJCsrOsLvt/+mjG8dmDBlupHpQaDJNHTx6BTKBQA=",
    blurWidth: 2,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/cursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$scroll$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/scroll-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$products$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/products-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cookie$2d$consent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/cookie-consent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$smooth$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/smooth-scroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$left$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$left$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/soju-hero-left.webp.mjs { IMAGE => "[project]/src/assets/images/soju-hero-left.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$right$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$right$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/soju-hero-right.webp.mjs { IMAGE => "[project]/src/assets/images/soju-hero-right.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-[var(--primary)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$smooth$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmoothScroll"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCursor"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: containerRef,
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative h-screen flex items-center justify-center overflow-hidden bg-[var(--primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 text-center px-6 max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: "SOJU BRASIL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Descubra o mundo refrescante do autêntico Soju Coreano Premium"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-between px-10 pointer-events-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-[10%] -translate-y-1/2 -rotate-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$left$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$left$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "Soju",
                                            width: 300,
                                            height: 800,
                                            className: "h-[90vh] w-auto object-contain",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 34,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 right-[10%] -translate-y-1/2 rotate-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$right$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$soju$2d$hero$2d$right$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "Soju",
                                            width: 300,
                                            height: 800,
                                            className: "h-[70vh] w-auto object-contain",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 44,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$scroll$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollSection"], {
                        as: "div",
                        className: "bg-gray-50 min-h-screen flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6 max-w-6xl py-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-7xl font-bold mb-12 text-center text-gray-900",
                                    children: "Soju saboroso a cada drink"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Mergulhe no universo do Soju Chum Churum, a bebida destilada mais icônica da Coreia. Feita com ingredientes premium como arroz, batata ou tapioca, combina suavidade e um toque adocicado. Com menos calorias e um teor alcoólico leve, é perfeito para uma experiência descontraída, seja puro, gelado ou em coquetéis criativos. A essência do soju tradicional com 16,5% de teor alcoólico. Feito com água alcalina pura, destilado de arroz e tapioca, oferece suavidade única."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$scroll$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollSection"], {
                        as: "div",
                        className: "bg-white min-h-screen flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6 max-w-6xl text-center py-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl md:text-7xl font-bold mb-8 text-gray-900",
                                        children: "Linha Soonhari"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto",
                                        children: "A linha Soonhari transforma o soju em uma explosão de sabores frutados, ideal para quem busca algo doce, leve e divertido. Com 12% de teor alcoólico, é perfeita sozinha ou em coquetéis."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto",
                                        children: "Conheça os 8 sabores que tornam a linha Soonhari irresistível logo abaixo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 87,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$products$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductsSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$scroll$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollSection"], {
                        as: "div",
                        className: "bg-gray-50 min-h-screen flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6 max-w-6xl py-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-7xl font-bold mb-12 text-center text-gray-900",
                                    children: "Por que Escolher Chum Churum?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6",
                                            children: "Seja fã de bebidas coreanas ou em busca de novos sabores, o Soju Chum Churum oferece uma experiência única — tradição pura no Original e inovação frutada na linha Soonhari."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto",
                                            children: "Com menos calorias e sabor suave, é perfeito para celebrações ou momentos casuais com amigos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$scroll$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollSection"], {
                        as: "div",
                        className: "bg-white min-h-screen flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6 max-w-6xl py-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-7xl font-bold mb-12 text-center text-gray-900",
                                    children: "Onde Encontrar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row justify-between items-start gap-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg md:text-xl text-gray-700 leading-relaxed",
                                                children: "Experimente o Soju Chum Churum em nossa loja conceito no Recife, um espaço que une sofisticação e cultura coreana."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl md:text-3xl font-semibold text-gray-800 mb-4",
                                                    children: "Shopping Recife"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg md:text-xl text-gray-700 leading-relaxed",
                                                    children: [
                                                        "R. Padre Carapuceiro, 777",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Boa Viagem, Recife - PE",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 37
                                                        }, this),
                                                        "CEP 51020-900",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Piso L2 - Loja 321"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 131,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$cookie$2d$consent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CookieConsent"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(Home, "5okL0DAk6Atnb3+Rru+wGBWyP+4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_09ed77d7._.js.map