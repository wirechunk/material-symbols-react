import type { SVGProps } from "react";
export const SvgDataArray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M600-160v-60h140v-520H600v-60h200v640H600Zm-440 0v-640h200v60H220v520h140v60H160Z" />
  </svg>
);
