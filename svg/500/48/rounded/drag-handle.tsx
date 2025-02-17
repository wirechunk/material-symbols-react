import type { SVGProps } from "react";
export const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M188.09-381.87q-14.43 0-24.25-9.87t-9.82-24.37q0-14.5 9.82-24.19 9.82-9.7 24.25-9.7h583.82q14.43 0 24.37 9.87 9.94 9.87 9.94 24.37 0 14.5-9.94 24.19-9.94 9.7-24.37 9.7H188.09Zm0-128.13q-14.43 0-24.25-9.87t-9.82-24.37q0-14.5 9.82-24.31 9.82-9.82 24.25-9.82h583.82q14.43 0 24.37 9.99 9.94 9.99 9.94 24.49 0 14.5-9.94 24.19-9.94 9.7-24.37 9.7H188.09Z" />
  </svg>
);
