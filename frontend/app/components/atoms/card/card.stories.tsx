import styled from "styled-components";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Box from "../box/box";
import Card from "./card";

export default {
  title: "Atoms/Card",
  component: Card
} as ComponentMeta<typeof Card>;

const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;

const BoxStyled = styled(Box)`
  height: 400px;
  width: 500px;
`;

export const CardDefault = CardTemplate.bind({});
CardDefault.storyName = "Card";
CardDefault.args = {
  children: <BoxStyled>Losowy kontent</BoxStyled>
};
