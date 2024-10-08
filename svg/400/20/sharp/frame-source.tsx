import type { SVGProps } from "react";
export const SvgFrameSource = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M348-348 216-480l132-132 51 51-81 81 81 81-51 51Zm264 0-51-51 81-81-81-81 51-51 132 132-132 132ZM144-144v-240h72v168h168v72H144Zm432 0v-72h168v-168h72v240H576ZM144-576v-240h240v72H216v168h-72Zm600 0v-168H576v-72h240v240h-72Z" />
  </svg>
);
