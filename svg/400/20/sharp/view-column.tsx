import type { SVGProps } from "react";
export const SvgViewColumn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-240v-480h672v480H144Zm72-72h128v-336H216v336Zm200 0h128v-336H416v336Zm200 0h128v-336H616v336Z" />
  </svg>
);
