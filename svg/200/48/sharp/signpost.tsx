import type { SVGProps } from "react";
export const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M464.62-120v-173.85H255.38L160-389.23l95.38-95.39h209.24v-84.61H200V-760h264.62v-80h30.76v80h209.24L800-664.62l-95.38 95.39H495.38v84.61H760v190.77H495.38V-120h-30.76ZM230.77-600h461.15l64.62-64.62-64.62-64.61H230.77V-600Zm37.31 275.38h461.15v-129.23H268.08l-64.62 64.62 64.62 64.61ZM230.77-600v-129.23V-600Zm498.46 275.38V-453.85v129.23Z" />
  </svg>
);
