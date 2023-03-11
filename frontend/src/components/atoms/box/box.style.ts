import styled from "styled-components";

import type { BoxProps } from "./box";

export const SBox = styled.div<BoxProps>`
  position: relative;
  box-sizing: border-box;
  width: ${(props) => {
    if (props.width?.length) return `${props.width}`;
    if (props.fullwidth) return `100%`;
    return "auto";
  }};
`;
