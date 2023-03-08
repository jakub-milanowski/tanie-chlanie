import styled from "styled-components";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Box from "./box";

export default {
  title: "Atoms/Box",
  component: Box
} as ComponentMeta<typeof Box>;

const BoxStories = styled(Box)`
  background-color: pink;
`;

const BoxTemplate: ComponentStory<typeof Box> = (args) => <BoxStories {...args}>text</BoxStories>;

export const BoxDefault = BoxTemplate.bind({});
BoxDefault.storyName = "Box";
BoxDefault.args = {
  fullwidth: true
};
