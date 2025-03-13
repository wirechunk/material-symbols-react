import type { SVGProps } from "react";
export const SvgLineEndArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M440-200v-240H80v-80h360v-240l440 280-440 280Zm80-146 211-134-211-134v268Zm0-134Z" />
  </svg>
);
