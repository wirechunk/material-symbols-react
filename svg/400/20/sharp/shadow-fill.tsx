import type { SVGProps } from "react";
export const SvgShadowFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-624h144v-144h624v624H720v144H96Zm216-216h480v-480H312v480Z" />
  </svg>
);
