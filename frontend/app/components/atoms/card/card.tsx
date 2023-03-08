import React from "react";

import type { BoxProps } from "../box/box";
import { StyledCard } from "./card.style";

export interface CardProps extends React.ComponentPropsWithoutRef<"div">, BoxProps {}

const Card = (props: CardProps): JSX.Element => {
  const { children, ...rest } = props;

  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Card;
