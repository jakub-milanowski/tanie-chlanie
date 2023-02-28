import styled from "styled-components";
import type { ColumnProps } from "./column";
import Box from "../box/box";

export const SColumn = styled(Box)<ColumnProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
`;
