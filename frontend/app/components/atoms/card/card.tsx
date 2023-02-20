import React from "react";

import type { BoxProps } from "~/components/atoms/box/box";

import { StyledCard } from "./card.style";

interface CardProps extends React.ComponentPropsWithoutRef<"div">, BoxProps {}

const Card = (props: CardProps): JSX.Element => {
  const { children, ...rest } = props;

  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Card;
