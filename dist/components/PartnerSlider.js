"use strict";
"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PartnerSlider;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const react_2 = require("swiper/react");
const modules_1 = require("swiper/modules");
require("swiper/css");
require("swiper/css/navigation");
function PartnerSlider() {
    const [partners, setPartners] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchPartners = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("/api/partners");
                if (!res.ok)
                    throw new Error("Failed to fetch partners");
                const data = yield res.json();
                if (!Array.isArray(data)) {
                    throw new Error("Invalid API response format");
                }
                setPartners(data);
            }
            catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
                else {
                    setError("An unknown error occurred");
                }
            }
            finally {
                setLoading(false);
            }
        });
        fetchPartners();
    }, []);
    if (loading)
        return (0, jsx_runtime_1.jsx)("p", { className: "text-center", children: "Loading partners..." });
    if (error)
        return (0, jsx_runtime_1.jsxs)("p", { className: "text-center text-red-500", children: ["Error: ", error] });
    if (!partners.length)
        return (0, jsx_runtime_1.jsx)("p", { className: "text-center", children: "No partners found." });
    return ((0, jsx_runtime_1.jsx)("section", { className: "partners-slider bg-gray-100 py-10", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto", children: (0, jsx_runtime_1.jsx)(react_2.Swiper, { modules: [modules_1.Navigation, modules_1.Autoplay], spaceBetween: 20, slidesPerView: 2, breakpoints: {
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }, navigation: true, autoplay: { delay: 3000 }, loop: true, children: partners.map((partner, index) => {
                    var _a, _b, _c, _d;
                    return ((0, jsx_runtime_1.jsx)(react_2.SwiperSlide, { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: ((_b = (_a = partner.field_brand_logo) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.url) || "/placeholder.jpg", alt: ((_d = (_c = partner.name) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.value) || "Partner", width: 200, height: 100, className: "object-contain", unoptimized: true }) }, index));
                }) }) }) }));
}
