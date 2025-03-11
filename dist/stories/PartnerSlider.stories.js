"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const PartnerSlider_1 = __importDefault(require("../components/PartnerSlider"));
const meta = {
    title: "Components/PartnerSlider",
    component: PartnerSlider_1.default,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};
exports.default = meta;
exports.Default = {
    render: () => (0, jsx_runtime_1.jsx)(PartnerSlider_1.default, {}),
};
