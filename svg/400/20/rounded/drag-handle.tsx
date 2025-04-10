import type { SVGProps } from "react";
export const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M228.29-360q-15.29 0-25.79-10.29t-10.5-25.5q0-15.21 10.34-25.71 10.35-10.5 25.64-10.5h503.73q15.29 0 25.79 10.29t10.5 25.5q0 15.21-10.34 25.71-10.35 10.5-25.64 10.5H228.29Zm0-168q-15.29 0-25.79-10.29t-10.5-25.5q0-15.21 10.34-25.71 10.35-10.5 25.64-10.5h503.73q15.29 0 25.79 10.29t10.5 25.5q0 15.21-10.34 25.71-10.35 10.5-25.64 10.5H228.29Z" />
  </svg>
);
