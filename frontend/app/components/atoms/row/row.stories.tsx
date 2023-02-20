import styled from "styled-components";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Box from "../box/box";
import Row from "./row";

export default {
  title: "Box",
  component: Row
} as ComponentMeta<typeof Row>;

const BoxStyled = styled(Box)`
  background-color: pink;
  height: 400px;
`;

const RowTemplate: ComponentStory<typeof Row> = (args) => (
  <Row {...args}>
    <BoxStyled fullwidth>text</BoxStyled>
    <BoxStyled fullwidth>text</BoxStyled>
    <BoxStyled fullwidth>text</BoxStyled>
  </Row>
);

export const RowDefault = RowTemplate.bind({});
RowDefault.args = {
  fullwidth: true,
  gap: 30
};
