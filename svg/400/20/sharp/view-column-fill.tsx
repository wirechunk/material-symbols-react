import type { SVGProps } from "react";
export const SvgViewColumnFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-240v-480h192v480H144Zm240 0v-480h192v480H384Zm240 0v-480h192v480H624Z" />
  </svg>
);
