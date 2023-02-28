import styled from "styled-components";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Box from "../box/box";
import Column from "./column";

export default {
  title: "Atoms/Box",
  component: Column
} as ComponentMeta<typeof Column>;

const BoxStyled = styled(Box)`
  background-color: pink;
  height: 100px;
`;

const ColumnTemplate: ComponentStory<typeof Column> = (args) => (
  <Column {...args}>
    <BoxStyled fullwidth>text</BoxStyled>
    <BoxStyled fullwidth>text</BoxStyled>
    <BoxStyled fullwidth>text</BoxStyled>
  </Column>
);

export const ColumnDefault = ColumnTemplate.bind({});
ColumnDefault.storyName = "Column";
ColumnDefault.args = {
  fullwidth: true,
  gap: 40
};
