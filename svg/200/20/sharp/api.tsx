import type { SVGProps } from "react";
export const SvgApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-384-96-96 96-96 96 96-96 96Zm-86-236.15-63.69-63.7L480-833.54l149.69 149.69-63.69 63.7-86-86-86 86ZM276.15-330.31 126.46-480l149.69-149.69 63.7 63.69-86 86 86 86-63.7 63.69Zm407.7 0L620.15-394l86-86-86-86 63.7-63.69L833.54-480 683.85-330.31ZM480-126.46 330.31-276.15l63.69-63.7 86 86 86-86 63.69 63.7L480-126.46Z" />
  </svg>
);
