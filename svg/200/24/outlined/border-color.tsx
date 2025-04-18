import type { SVGProps } from "react";
export const SvgBorderColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80 0v-80h800V0H80Zm160-286.92h42.92l352-351.77-21.3-22.08-21.85-21.08-351.77 352v42.93Zm-40 40v-100l448.77-448.54q6.38-6.39 13.96-9.31 7.58-2.92 15.44-2.92 7.86 0 15.23 2.92t13.98 9.54l41.16 41.38q6.61 6.39 9.42 13.82 2.81 7.44 2.81 15.37 0 7.43-2.93 15.13-2.92 7.7-9.3 14.07L300-246.92H200Zm520.77-477.85-42.92-42.92 42.92 42.92Zm-85.85 86.08-21.3-22.08-21.85-21.08 43.15 43.16Z" />
  </svg>
);
