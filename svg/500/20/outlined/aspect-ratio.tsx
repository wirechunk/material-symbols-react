import type { SVGProps } from "react";
export const SvgAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M549.13-314.87h192v-192h-72v120h-120v72ZM218.87-453.13h72v-120h120v-72h-192v192Zm-48 269.26q-34.48 0-58.74-24.27-24.26-24.27-24.26-58.77v-426.5q0-34.5 24.26-58.61t58.74-24.11h618.26q34.48 0 58.74 24.27 24.26 24.27 24.26 58.77v426.5q0 34.5-24.26 58.61t-58.74 24.11H170.87Zm0-83h618.26v-426.26H170.87v426.26Zm0 0v-426.26 426.26Z" />
  </svg>
);
