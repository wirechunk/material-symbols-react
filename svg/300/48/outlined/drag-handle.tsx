import type { SVGProps } from "react";
export const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M180-391.92v-45.39h600v45.39H180Zm0-130.77v-45.39h600v45.39H180Z" />
  </svg>
);
