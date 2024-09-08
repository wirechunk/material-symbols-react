import type { SVGProps } from "react";
export const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h561l240 320-239 320H80Zm60-60h471l195-260-195-260H140v520Zm333-260Z" />
  </svg>
);
