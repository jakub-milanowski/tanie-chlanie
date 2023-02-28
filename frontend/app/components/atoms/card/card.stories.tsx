import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Card from "./card";
import Box from "../box/box";
import styled from "styled-components";

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
