import React from "react";
import { Container } from "../../styles/root.style";

interface VenuesLayoutProps {
  children: React.ReactNode;
}

const VenuesLayout = (props: VenuesLayoutProps): JSX.Element => {
  return <Container>{props.children}</Container>;
};

export default VenuesLayout;
