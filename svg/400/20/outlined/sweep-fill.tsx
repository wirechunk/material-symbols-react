import type { SVGProps } from "react";
export const SvgSweepFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M432-240v-72h240v72H432Zm-189 0L17-466l51-51 175 175 378-378 51 51-429 429Zm333-156v-72h240v72H576Zm144-156v-72h240v72H720Z" />
  </svg>
);
