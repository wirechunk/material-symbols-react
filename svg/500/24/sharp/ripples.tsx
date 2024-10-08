import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M202.87-202.87h554.26v-333.15q-17.76 10.04-37.39 15.06-19.63 5.03-39.74 5.03-67.91 0-115.99-48.08T515.93-680q0-20.11 5.03-39.74 5.02-19.63 15.06-37.39H202.87v554.26Zm-91 91v-736.26h736.26v736.26H111.87Zm91-645.26v554.26-554.26Z" />
  </svg>
);
