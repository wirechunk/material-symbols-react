import type { SVGProps } from "react";
export const SvgViewKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M280-280h80v-400h-80v400Zm160-200h80v-200h-80v200Zm160 120h80v-320h-80v320ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
);
