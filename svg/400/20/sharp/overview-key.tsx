import type { SVGProps } from "react";
export const SvgOverviewKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-192v-576h576v576H48Zm72-72h432v-432H120v432Zm576 72v-576h72v576h-72Zm144 0v-576h72v576h-72Zm-720-72v-432 432Z" />
  </svg>
);
