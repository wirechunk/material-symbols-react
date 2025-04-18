import type { SVGProps } from "react";
export const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M282.63-230h120v-170h40v-190h-200v190h40v170Zm60-394q23.24 0 39.62-16.5t16.38-39.5q0-23-16.38-39.5T342.63-736q-23 0-39.5 16.5t-16.5 39.5q0 23 16.5 39.5t39.5 16.5Zm170.94 94h200l-100-160-100 160Zm100 260 100-160h-200l100 160ZM114.02-114.02v-732.2h732.2v732.2h-732.2Zm68.13-68.13h595.7v-595.7h-595.7v595.7Zm0 0v-595.7 595.7Z" />
  </svg>
);
