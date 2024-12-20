import type { SVGProps } from "react";
export const SvgShadow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-80v-628h172v-172h628v628H708v172H80Zm232-232h508v-508H312v508Z" />
  </svg>
);
