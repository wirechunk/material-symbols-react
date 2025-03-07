import type { SVGProps } from "react";
export const SvgDynamicFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-144v-336h72v264h360v72H96Zm144-144v-336h72v264h360v72H240Zm144-144v-384h480v384H384Zm72-72h336v-168H456v168Z" />
  </svg>
);
