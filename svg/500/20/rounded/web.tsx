import type { SVGProps } from "react";
export const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M170.87-183.87q-34.48 0-58.74-24.27-24.26-24.27-24.26-58.77v-426.5q0-34.5 24.26-58.61t58.74-24.11h618.26q34.48 0 58.74 24.27 24.26 24.27 24.26 58.77v426.5q0 34.5-24.26 58.61t-58.74 24.11H170.87Zm0-83h402.26v-120H170.87v120Zm474.26 0h144v-312h-144v312Zm-474.26-192h402.26v-120H170.87v120Z" />
  </svg>
);
