import type { SVGProps } from "react";
export const SvgTextFormat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-200v-60h560v60H200Zm76-160 175-440h58l175 440h-55l-45-119H376l-45 119h-55Zm117-164h174l-85-222h-4l-85 222Z" />
  </svg>
);
