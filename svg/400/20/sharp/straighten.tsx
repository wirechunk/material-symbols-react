import type { SVGProps } from "react";
export const SvgStraighten = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-240v-480h768v480H96Zm72-72h624v-336H672v168h-72v-168h-84v168h-72v-168h-84v168h-72v-168H168v336Zm120-168h72-72Zm156 0h72-72Zm156 0h72-72Zm-120 0Z" />
  </svg>
);
