import type { SVGProps } from "react";
export const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h341l60 60h399v580H80Zm60-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Z" />
  </svg>
);
