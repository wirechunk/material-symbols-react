import type { SVGProps } from "react";
export const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-400v80H80v-560h560v160h-80v-80H160v400h80Zm80 320v-560h560v560H320Zm80-80h400v-400H400v400Zm200-200Z" />
  </svg>
);
