import styled from "styled-components";
import Row from "../../../../components/atoms/row/row";

export const SNavBar = styled(Row)`
  height: 80px;
  background-color: ${(props) => props.theme.primary};
`;
