import type { SVGProps } from "react";
export const SvgScrollableHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M222.78-124.78q-40.3 0-69.15-28.85-28.85-28.85-28.85-69.15v-514.44q0-41 28.85-69.5t69.15-28.5h514.44q41 0 69.5 28.5t28.5 69.5v514.44q0 40.3-28.5 69.15-28.5 28.85-69.5 28.85H222.78Zm0-98h514.44v-178.44H222.78v178.44Zm0-276.44h514.44v-238H222.78v238Zm0 12v-250 250Z" />
  </svg>
);
