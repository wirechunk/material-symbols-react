import type { SVGProps } from "react";
export const SvgViewModule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M616-516h128v-125.22H616V-516Zm-199.43 0h128v-125.22h-128V-516Zm-200 0h128v-125.22h-128V-516Zm0 197.22h128V-444h-128v125.22Zm200 0h128V-444h-128v125.22Zm199.43 0h128V-444H616v125.22Zm-497.44 0v-322.44q0-39.72 28.79-68.86t69.22-29.14H744q40.43 0 69.21 29.14Q842-680.94 842-641.22v322.44q0 39.72-28.79 68.86-28.78 29.14-69.21 29.14H216.57q-40.43 0-69.22-29.14t-28.79-68.86Z" />
  </svg>
);
