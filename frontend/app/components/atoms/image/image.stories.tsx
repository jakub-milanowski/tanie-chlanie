import { ComponentMeta, ComponentStory } from "@storybook/react";
import Image from "./image";
import styled from "styled-components";

export default {
  title: "Atoms/Image",
  component: Image
} as ComponentMeta<typeof Image>;

const ImageStyled = styled(Image)`
  height: 300px;
`;

const ImageTemplate: ComponentStory<typeof Image> = (args) => <ImageStyled {...args} />;

export const ImageDefault = ImageTemplate.bind({});
ImageDefault.storyName = "Image";
ImageDefault.args = {
  src: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
};
