import type { SVGProps } from "react";
export const SvgWebFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm80-80h420v-140H160v140Zm500 0h140v-360H660v360ZM160-460h420v-140H160v140Z" />
  </svg>
);
