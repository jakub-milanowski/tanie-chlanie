import type { BoxProps } from "../box/box";
import { SRow } from "./row.style";

export interface RowProps extends Omit<BoxProps, "direction"> {
  gap?: number;
  align?: "top" | "center" | "bottom";
}

const Row = (props: RowProps): JSX.Element => {
  const { children, ...rest } = props;

  return (
    <SRow {...rest} direction="row">
      {children}
    </SRow>
  );
};

export default Row;
