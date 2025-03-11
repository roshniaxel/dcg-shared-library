import type { Meta, StoryObj } from "@storybook/react";
import TextWithImage, { TextWithImageProps } from "../TextWithImage";

const meta: Meta<typeof TextWithImage> = {
  title: "Components/TextWithImage",
  component: TextWithImage,
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

export default meta;
type Story = StoryObj<typeof TextWithImage>;

export const Default: Story = {};
export const ImageRight: Story = {
  args: {
    imagePosition: "right",
  },
};
export const NoButton: Story = {
  args: {
    button: undefined,
  },
};
