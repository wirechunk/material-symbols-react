import type { SVGProps } from "react";
export const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140.78-334v-106h678.44v106H140.78Zm0-186v-106h678.44v106H140.78Z" />
  </svg>
);
