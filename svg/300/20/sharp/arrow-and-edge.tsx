import type { SVGProps } from "react";
export const SvgArrowAndEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-163.62 350.23-293.39 386-329.54l68 67.39v-168.08q0-31.72-22.5-54.28-22.49-22.57-54.11-22.57H96.62V-796h52v236.92h228.77q32.01 0 58.76 14.32 26.74 14.31 43.85 38.53 17.11-24.22 43.85-38.53 26.75-14.32 58.76-14.32h228.77V-796h52v288.92H582.61q-31.62 0-54.11 22.5-22.5 22.5-22.5 54.12v167.92l67.08-67.4 36.69 36.55L480-163.62Z" />
  </svg>
);
