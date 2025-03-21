import type { SVGProps } from "react";
export const SvgPropane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-288h384q70 0 119-49t49-119q0-70-49-119t-119-49H288q-70 0-119 49t-49 119q0 70 49 119t119 49Zm192-168Zm-82-220h164v-51.84H398V-676ZM288-160v-76q-91.54 0-155.77-64.14T68-455.91q0-91.63 64.17-155.86Q196.33-676 288-676h58v-103.84h268V-676h58q91.67 0 155.83 64.14Q892-547.72 892-456.09q0 91.63-64.17 155.86Q763.67-236 672-236v76h-52v-76H340v76h-52Z" />
  </svg>
);
