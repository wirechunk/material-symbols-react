import type { SVGProps } from "react";
export const SvgCropSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-140v-680h680v680H140Zm64-64h552v-552H204v552Zm0 0v-552 552Z" />
  </svg>
);
