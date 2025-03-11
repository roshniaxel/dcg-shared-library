export interface TextWithImageProps {
    title: string;
    text: string;
    imageUrl: string;
    imageAlt?: string;
    imagePosition?: "left" | "right";
    button?: {
        text: string;
        href: string;
    };
}
export default function TextWithImage({ title, text, imageUrl, imageAlt, imagePosition, button, }: TextWithImageProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TextWithImage.d.ts.map