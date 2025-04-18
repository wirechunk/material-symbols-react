import type { SVGProps } from "react";
export const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M124.78-124.78v-205.13L458.87-664l-54.57-53 78.7-78.13 72 72 135.87-138.13 168.39 171.39-136.69 134.44 72 73L717-404.87l-54-54-333.09 334.09H124.78Zm98-98h66.39L602.39-536 537-602.39 222.78-289.17v66.39Zm425.7-384.44L732.83-692 692-733.83l-84.78 84.35 41.26 42.26Zm0 0-41.26-42.26 41.26 42.26Z" />
  </svg>
);
