import type { SVGProps } from "react";
export const SvgRepeatOnFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-80q-16.85 0-28.42-11.58Q80-103.15 80-120v-720q0-16.85 11.58-28.42Q103.15-880 120-880h720q16.85 0 28.42 11.58Q880-856.85 880-840v720q0 16.85-11.58 28.42Q856.85-80 840-80H120Zm172.31-40 28.31-28.77-83.54-83.54h495.23v-200h-40v160H237.08l83.54-83.54-28.31-28.77L160-252.31 292.31-120Zm-64.62-407.69h40v-160h455.23l-83.54 83.54 28.31 28.77L800-707.69 667.69-840l-28.31 28.77 83.54 83.54H227.69v200Z" />
  </svg>
);
