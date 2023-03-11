import React from "react";
import { Container } from "../../../styles/root.style";

interface VenueLayoutProps {
  children: React.ReactNode;
}

const VenueLayout = (props: VenueLayoutProps): JSX.Element => {
  return <Container>{props.children}</Container>;
};

export default VenueLayout;
