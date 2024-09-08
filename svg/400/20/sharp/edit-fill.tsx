import type { SVGProps } from "react";
export const SvgEditFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-153l549-549 153 153-549 549H144Zm549-498 51-51-51-51-51 51 51 51Z" />
  </svg>
);
