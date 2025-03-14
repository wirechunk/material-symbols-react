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
    <path d="M216-216h528v-343.54q-17 10.39-34.99 15.96-18 5.58-37.01 5.58-56.15 0-95.08-38.92Q538-615.85 538-671.93q0-19.45 5.58-37.26Q549.15-727 559.54-744H216v528Zm-52 52v-632h632v632H164Zm52-580v528-528Z" />
  </svg>
);
