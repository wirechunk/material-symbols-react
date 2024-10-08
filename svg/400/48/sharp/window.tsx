import type { SVGProps } from "react";
export const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M840-120H120v-720h720v720ZM510-450v270h270v-270H510Zm0-60h270v-270H510v270Zm-60 0v-270H180v270h270Zm0 60H180v270h270v-270Z" />
  </svg>
);
