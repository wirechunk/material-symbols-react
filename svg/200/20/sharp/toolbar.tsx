import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M184-184v-592h592v592H184Zm32-464h528v-96H216v96Zm528 32H216v400h528v-400Zm-528-32v32-32Zm0 0v-96 96Zm0 32v400-400Z" />
  </svg>
);
