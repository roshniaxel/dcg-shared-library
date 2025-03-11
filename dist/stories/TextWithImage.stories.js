"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoButton = exports.ImageRight = exports.Default = void 0;
const TextWithImage_1 = __importDefault(require("../TextWithImage"));
const meta = {
    title: "Components/TextWithImage",
    component: TextWithImage_1.default,
    tags: ["autodocs"],
    args: {
        title: "About Our Product",
        text: "This is an amazing product that helps you.",
        imageUrl: "/images/c2.png",
        imageAlt: "Placeholder Image",
        imagePosition: "left",
        button: { text: "Learn More", href: "/about" },
    },
};
exports.default = meta;
exports.Default = {};
exports.ImageRight = {
    args: {
        imagePosition: "right",
    },
};
exports.NoButton = {
    args: {
        button: undefined,
    },
};
