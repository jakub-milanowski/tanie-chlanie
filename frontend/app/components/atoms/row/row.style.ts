import styled from "styled-components";
import type { RowProps } from "./row";
import Box from "../box/box";

export const SRow = styled(Box)<RowProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
  align-items: ${(props) => {
    switch (props.align) {
      case "top":
        return "flex-start";
      case "center":
        return "center";
      case "bottom":
        return "flex-end";
      default:
        return "middle";
    }
  }};
`;
