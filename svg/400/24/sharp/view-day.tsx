import type { SVGProps } from "react";
export const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-160v-80h720v80H120Zm0-160v-320h720v320H120Zm80-80h560v-160H200v160Zm-80-320v-80h720v80H120Zm80 320v-160 160Z" />
  </svg>
);
