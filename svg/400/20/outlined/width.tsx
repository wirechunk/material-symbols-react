import type { SVGProps } from "react";
export const SvgWidth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-336 144-480l144-144 51 51-57 57h396l-57-57 51-51 144 144-144 144-51-51 57-57H282l57 57-51 51Z" />
  </svg>
);
