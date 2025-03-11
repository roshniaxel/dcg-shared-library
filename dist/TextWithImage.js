"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextWithImage;
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
function TextWithImage({ title, text, imageUrl, imageAlt = "", imagePosition = "left", button, }) {
    return ((0, jsx_runtime_1.jsxs)("section", { className: `flex flex-col md:flex-row items-center gap-6 ${imagePosition === "right" ? "md:flex-row-reverse" : ""} p-6`, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: imageUrl, alt: imageAlt, width: 600, height: 400, className: "w-full rounded-lg shadow-lg" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-1/2 text-center md:text-left", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold mb-4", children: title }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-700 mb-4", dangerouslySetInnerHTML: { __html: text } }), button && ((0, jsx_runtime_1.jsx)(link_1.default, { href: button.href, className: "inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition", children: button.text }))] })] }));
}
