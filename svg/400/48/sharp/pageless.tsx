import type { SVGProps } from "react";
export const SvgPageless = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M40-80v-330h60v270h310v60H40Zm510 0v-60h310v-270h60v330H550ZM40-550v-330h370v60H100v270H40Zm820 0v-270H550v-60h370v330h-60Z" />
  </svg>
);
