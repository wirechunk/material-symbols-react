import type { SVGProps } from "react";
export const SvgWallpaper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-280h40v240h240v40H160Zm360 0v-40h240v-240h40v280H520ZM300-300l78.46-103.08 70 84.62 104.62-132.31L666.15-300H300ZM160-520v-280h280v40H200v240h-40Zm600 0v-240H520v-40h280v280h-40Zm-147.51-47.69q-19.26 0-32.03-12.59t-12.77-31.85q0-19.25 12.59-32.02 12.59-12.77 31.85-12.77 19.25 0 32.02 12.59 12.77 12.59 12.77 31.84 0 19.26-12.59 32.03t-31.84 12.77Z" />
  </svg>
);
