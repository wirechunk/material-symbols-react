import type { SVGProps } from "react";
export const SvgLooksOne = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M500-300h40v-360H420v40h80v320Zm300 140H160v-640h640v640Zm-600-40h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
);
