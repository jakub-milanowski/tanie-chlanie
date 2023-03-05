import styled from "styled-components";

import Box from "../box/box";
import type { ColumnProps } from "./column";

export const SColumn = styled(Box)<ColumnProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
`;
