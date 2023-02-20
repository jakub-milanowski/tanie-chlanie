import React from "react";

import { SBox } from "~/components/atoms/box/box.style";

export interface BoxProps extends React.ComponentPropsWithoutRef<"div"> {
  direction?: "column" | "row";
  fullwidth?: boolean;
  width?: string;
}

const Box = (props: BoxProps): JSX.Element => {
  const { children, ...rest } = props;

  return <SBox {...rest}>{children}</SBox>;
};

export default Box;
