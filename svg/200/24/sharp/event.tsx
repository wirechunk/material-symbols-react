import type { SVGProps } from "react";
export const SvgEvent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M595.38-240q-35.07 0-59.84-24.77-24.77-24.77-24.77-59.85 0-35.07 24.77-59.84 24.77-24.77 59.84-24.77 35.08 0 59.85 24.77Q680-359.69 680-324.62q0 35.08-24.77 59.85Q630.46-240 595.38-240ZM160-120v-640h135.38v-89.23h43.08V-760h286.16v-89.23h40V-760H800v640H160Zm40-40h560v-375.38H200V-160Zm0-415.39h560V-720H200v144.61Zm0 0V-720v144.61Z" />
  </svg>
);
