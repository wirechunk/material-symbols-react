import type { SVGProps } from "react";
export const SvgWidthWide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h720v560H120Zm40-40h120v-480H160v480Zm160 0h320v-480H320v480Zm360 0h120v-480H680v480ZM320-720v480-480Z" />
  </svg>
);
