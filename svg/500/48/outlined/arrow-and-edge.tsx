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
    <path d="M480.24-114.02 328.26-265.76l47.98-49.22 69.93 70.18v-209.94q0-26.9-19.06-45.84-19.06-18.94-45.72-18.94H101.2q-28.34 0-48.36-20.02-20.01-20.01-20.01-48.11v-258.57h68.37v258.57h280.19q29.45 0 54.81 11.83 25.37 11.84 44.04 32.52 18.67-20.68 44.04-32.52 25.36-11.83 54.81-11.83h279.95v-258.57h68.13v258.57q0 28.1-20.01 48.11-20.02 20.02-48.12 20.02H578.85q-26.9 0-45.72 18.94-18.83 18.94-18.83 45.84v209.94l69.94-68.94 47.74 47.98-151.74 151.74Z" />
  </svg>
);
