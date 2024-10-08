import type { SVGProps } from "react";
export const SvgFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M600-760v-80h80v80h-80Zm0 640v-80h80v80h-80Zm160-640v-80h80v80h-80Zm0 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM360-120H120v-720h240v80H200v560h160v80Zm80 80v-880h80v880h-80Z" />
  </svg>
);
