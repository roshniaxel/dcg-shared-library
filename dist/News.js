"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const News = ({ articles, bgColor = "white", textColor = "black" }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { style: { backgroundColor: bgColor, color: textColor }, className: "p-6 rounded-lg", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-bold mb-4", children: "Related Articles" }), articles.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { className: "text-gray-500", children: "No articles available." })) : ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: articles.map((article, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-5 rounded-lg shadow-md", children: [(0, jsx_runtime_1.jsx)("img", { src: article.image || "/default-image.jpg", alt: article.title, className: "w-full h-full object-cover rounded-md", onError: (e) => (e.currentTarget.src = "/default-image.jpg") }), (0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold mt-2", children: article.title }), (0, jsx_runtime_1.jsx)("a", { href: article.link, className: "text-blue-500 hover:underline mt-2 inline-block", children: "Read More \u2192" })] }, article.id || `article-${index}`))) }))] }));
};
exports.default = News;
