import type { SVGProps } from "react";
export const SvgStickyNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M640-120H120v-720h720v520L640-120Zm-40-80v-160h160v-400H200v560h400ZM440-320h80v-240h120v-80H320v80h120v240Zm160 120Zm-400 0v-560 560Z" />
  </svg>
);
