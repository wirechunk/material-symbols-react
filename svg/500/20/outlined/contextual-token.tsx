import type { SVGProps } from "react";
export const SvgContextualToken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M238.09-334.09h304.3v-112.3h-304.3v112.3Zm359.52 0h124.3v-291.82h-124.3v291.82ZM238.09-513.61h304.3v-112.3h-304.3v112.3Zm-67.22 329.74q-34.48 0-58.74-24.27-24.26-24.27-24.26-58.77v-426.5q0-34.5 24.26-58.61t58.74-24.11h618.26q34.48 0 58.74 24.27 24.26 24.27 24.26 58.77v426.5q0 34.5-24.26 58.61t-58.74 24.11H170.87Zm0-83h618.26v-426.26H170.87v426.26Zm0 0v-426.26 426.26Z" />
  </svg>
);
