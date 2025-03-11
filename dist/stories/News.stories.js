"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const News_1 = __importDefault(require("../News"));
exports.default = {
    title: "Components/News",
    component: News_1.default,
    argTypes: {
        bgColor: { control: "color" },
        textColor: { control: "color" },
    },
};
const Template = (args) => (0, jsx_runtime_1.jsx)(News_1.default, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    articles: [
        { id: 1, title: "How to Learn React", link: "https://reactjs.org/", image: "/News1.gif" },
        { id: 2, title: "Understanding TypeScript", link: "https://www.typescriptlang.org/", image: "/News2.gif" },
        { id: 3, title: "Next.js Guide", link: "https://nextjs.org/", image: "/News3.gif" },
    ],
    bgColor: "#f8f9fa",
    textColor: "#333",
};
exports.Empty = Template.bind({});
exports.Empty.args = {
    articles: [],
    bgColor: "#f8f9fa",
    textColor: "#333",
};
