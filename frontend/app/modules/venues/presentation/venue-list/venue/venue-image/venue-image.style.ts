import styled from "styled-components";

import { SImage } from "~/components/atoms/image/image.style";

import type { VenueImageProps } from "./venue-image";

export const SVenueImage = styled(SImage)<VenueImageProps>`
  border-radius: 6px 0 0 6px;
  width: 200px;
  height: 130px;
`;
