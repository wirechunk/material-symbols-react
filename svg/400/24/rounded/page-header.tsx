import type { SVGProps } from "react";
export const SvgPageHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-760q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Zm600 80q33 0 56.5 23.5T840-600v400q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-400q0-33 23.5-56.5T200-680h560Zm0 80H200v400h560v-400Zm-560 0v400-400Z" />
  </svg>
);
