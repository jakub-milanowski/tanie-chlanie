import type { BoxProps } from "~/components/atoms/box/box";

import { SColumn } from "./column.style";

export interface ColumnProps extends Omit<BoxProps, "direction"> {
  gap?: number;
}

const Column = (props: ColumnProps): JSX.Element => {
  const { children, ...rest } = props;

  return (
    <SColumn {...rest} direction="column">
      {children}
    </SColumn>
  );
};

export default Column;
