import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216h528v-355.08q-17 10.77-34.8 16.93Q691.4-548 672-548q-52.31 0-88.15-35.85Q548-619.69 548-671.93q0-19.84 6.15-37.45Q560.31-727 571.08-744H216v528Zm-32 32v-592h592v592H184Zm32-560v528-528Z" />
  </svg>
);
