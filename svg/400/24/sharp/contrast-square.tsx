import type { SVGProps } from "react";
export const SvgContrastSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm80-80h560v-560L200-200Zm20-400h80v80h60v-80h80v-60h-80v-80h-60v80h-80v60Zm461 280H481v-60h200v60Z" />
  </svg>
);
