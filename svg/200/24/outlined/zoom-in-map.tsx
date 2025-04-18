import type { SVGProps } from "react";
export const SvgZoomInMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M176-147.69 147.69-176l144-144H160v-40h200v200h-40v-131.69l-144 144Zm608 0-144-144V-160h-40v-200h200v40H668.31l144 144L784-147.69ZM160-600v-40h131.69l-144-144L176-812.31l144 144V-800h40v200H160Zm440 0v-200h40v131.69l144-144L812.31-784l-144 144H800v40H600Z" />
  </svg>
);
