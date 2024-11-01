import type { SVGProps } from "react";
export const SvgCapture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm0-72h624v-432H168v432Zm108-72h408q15.3 0 25.65-10.34Q720-356.68 720-371.96v-215.76q0-15.28-10.35-25.78Q699.3-624 684-624H276q-15.3 0-25.65 10.34Q240-603.32 240-588.04v215.76q0 15.28 10.35 25.78Q260.7-336 276-336Zm-108 72v-432 432Z" />
  </svg>
);
