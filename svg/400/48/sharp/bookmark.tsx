import type { SVGProps } from "react";
export const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120v-725h560v725L480-240 200-120Zm60-91 220-93 220 93v-574H260v574Zm0-574h440-440Z" />
  </svg>
);
