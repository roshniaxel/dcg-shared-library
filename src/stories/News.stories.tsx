import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import News, { NewsProps } from "../News";

export default {
  title: "Components/News",
  component: News,
  argTypes: {
    bgColor: { control: "color" },
    textColor: { control: "color" },
  },
} as Meta;

const Template: StoryFn<NewsProps> = (args: NewsProps) => <News {...args} />;

export const Default = Template.bind({});
Default.args = {
  articles: [
    { id: 1, title: "How to Learn React", link: "https://reactjs.org/", image: "/News1.gif" },
    { id: 2, title: "Understanding TypeScript", link: "https://www.typescriptlang.org/", image: "/News2.gif" },
    { id: 3, title: "Next.js Guide", link: "https://nextjs.org/", image: "/News3.gif" },
  ],
  bgColor: "#f8f9fa",
  textColor: "#333",
};

export const Empty = Template.bind({});
Empty.args = {
  articles: [],
  bgColor: "#f8f9fa",
  textColor: "#333",
};
