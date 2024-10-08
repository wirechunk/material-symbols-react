import type { SVGProps } from "react";
export const SvgMapFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m600-144-240-72-153 51q-23 8-43-6t-20-40v-498q0-16 9.5-28.5T177-755l183-61 240 72 153-51q23-9 43 5.5t20 40.5v498q0 16-9 28.5T783-205l-183 61Zm-36-86v-450l-168-50v450l168 50Z" />
  </svg>
);
