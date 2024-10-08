import type { SVGProps } from "react";
export const SvgLineEndArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M440-200v-250H80v-60h360v-250l440 280-440 280Zm60-109 268-171-268-171v342Zm0-171Z" />
  </svg>
);
