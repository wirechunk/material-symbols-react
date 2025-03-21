import type { SVGProps } from "react";
export const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m553.52-784.74 125.26 93.52h58.44q41 0 69.5 28.5t28.5 69.5v420.44H124.78v-444.09q0-30.46 26.07-43.86 26.06-13.4 51.12 3.36l81.51 54.24 132.74-164.52q24.78-32.05 65.3-36.46 40.52-4.41 72 19.37ZM222.78-523.87v118.08l112.09 83.62 144-197 258.35 207.04v-281.09h-92.05L493.13-706.83l-188.43 237-81.92-54.04Z" />
  </svg>
);
