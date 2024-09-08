import type { SVGProps } from "react";
export const SvgVerticalShadesFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-120v-80h80v-640h640v640h80v80H80Zm320-80h160v-560H400v560Z" />
  </svg>
);
