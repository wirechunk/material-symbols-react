import type { SVGProps } from "react";
export const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm60-471h680v-109H140v109Zm0 411h680v-282H140v282Zm0 0v-520 520Z" />
  </svg>
);
