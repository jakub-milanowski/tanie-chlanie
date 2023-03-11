import { Body } from "../styles/root.style";
import React from "react";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Tanie chlanie",
  description: "Tanie chalnie"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <Body>
        <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
      </Body>
    </html>
  );
};

export default RootLayout;
