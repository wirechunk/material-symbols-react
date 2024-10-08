import type { SVGProps } from "react";
export const SvgStylus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M189.83-129.87q-27.92 5.7-46.5-13.67-18.59-19.37-13.46-47.29l37.56-182.52 204.92 205.92-182.52 37.56Zm182.52-37.56L167.43-373.35l429.44-428.43q28.91-28.92 68.59-28.92 39.67 0 68.58 28.92l67.74 66.74q28.92 28.91 28.92 69.08 0 40.18-28.92 69.09L372.35-167.43Zm292.61-564.7L286.83-353 353-286.83l379.13-378.13-67.17-67.17Z" />
  </svg>
);
