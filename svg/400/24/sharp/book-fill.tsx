import type { SVGProps } from "react";
export const SvgBookFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-80v-800h640v800H160Zm280-440 100-60 100 60v-280H440v280Z" />
  </svg>
);
