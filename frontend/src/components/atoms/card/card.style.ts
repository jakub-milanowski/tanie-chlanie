import styled from "styled-components";

import Box from "../box/box";

export const StyledCard = styled(Box)`
  width: 100%;
  border-radius: 10px;
  margin: 1em 0;
  background-color: ${(props) => props.theme.white};
  cursor: ${(props) => (props.onClick ? "pointer" : "cursor")};
  box-shadow: ${(props) => props.theme.cardShadow};
  border-left: 5px solid ${(props) => props.theme.primary};
`;
