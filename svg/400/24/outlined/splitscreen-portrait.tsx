import type { SVGProps } from "react";
export const SvgSplitscreenPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-240h320v-200H320v200Zm0-280h320v-200H320v200Zm480 360q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Zm-80 0v-640H240v640h480Zm0-640H240h480Z" />
  </svg>
);
