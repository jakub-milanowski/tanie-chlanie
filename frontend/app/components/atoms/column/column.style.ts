import styled from "styled-components";

import { SBox } from "~/components/atoms/box/box.style";

import type { ColumnProps } from "./column";

export const SColumn = styled(SBox)<ColumnProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
`;
