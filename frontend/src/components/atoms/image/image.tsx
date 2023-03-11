import React from "react";

import { SImage } from "./image.style";

export type ImageProps = React.ComponentPropsWithoutRef<"img">;

const Image = (props: ImageProps): JSX.Element => {
  return <SImage {...props} />;
};

export default Image;
