import type { SVGProps } from "react";
export const SvgWorkFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-140v-560h240v-140h280v140h240v560H100Zm300-560h160v-80H400v80Z" />
  </svg>
);
