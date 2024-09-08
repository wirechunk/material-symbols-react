import type { SVGProps } from "react";
export const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm60-60h461v-163H140v163Zm521 0h159v-386H661v386ZM140-443h461v-163H140v163Z" />
  </svg>
);
