import type { SVGProps } from "react";
export const SvgArrowAndEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M480.24-114.02 328.26-265.76l47.98-49.22 69.93 70.18v-209.94q0-27.15-18.93-45.97-18.94-18.81-45.85-18.81H32.83v-326.7h68.37v258.57h280.19q29.63 0 54.9 11.83 25.28 11.84 43.95 32.52 18.67-20.68 43.94-32.52 25.28-11.83 54.91-11.83h279.95v-258.57h68.13v326.7H578.85q-27.15 0-45.85 18.81-18.7 18.82-18.7 45.97v209.94l69.94-68.94 47.74 47.98-151.74 151.74Z" />
  </svg>
);
