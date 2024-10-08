import type { SVGProps } from "react";
export const SvgPlaceItem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M198.09-109q-37.79 0-64.39-26.61-26.61-26.61-26.61-64.39v-398.09q0-37.78 26.61-64.39 26.6-26.61 64.39-26.61H354.5v91H198.09V-200h563.82v-398.09H605.5v-91h156.41q37.79 0 64.39 26.61 26.61 26.61 26.61 64.39V-200q0 37.78-26.61 64.39Q799.7-109 761.91-109H198.09ZM480-306.85 306.85-480l63.65-63.65 64 63.24V-960h91v479.59l64-63.24L653.15-480 480-306.85Z" />
  </svg>
);
