import type { SVGProps } from "react";
export const SvgImageAspectRatioFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-480h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM80-160v-640h800v640H80Z" />
  </svg>
);
