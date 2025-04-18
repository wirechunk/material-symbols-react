import type { SVGProps } from "react";
export const SvgArrowOrEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M313.08-159.23 181.54-290.77l27.54-28.31 84 83.77v-290.84H89.23V-800h40v233.85h203.85v330.07l83.77-83 27.77 28.31-131.54 131.54Zm333.84 0L515.38-290.77l27.54-28.31 84 83.77v-330.84h203.85V-800h40v273.85H666.92v291.07l83.77-84 27.77 28.31-131.54 131.54Z" />
  </svg>
);
