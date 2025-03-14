import type { SVGProps } from "react";
export const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-96-96-144H96v-624h768v624H576L480-96Zm0-130 58-86h254v-480H168v480h254l58 86Zm0-326Z" />
  </svg>
);
