import type { SVGProps } from "react";
export const SvgPageless = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M410-74.02H102.15q-28.35 0-48.24-19.89t-19.89-48.24V-410h68.13v267.85H410v68.13Zm140 0v-68.13h308.09V-410h68.13v267.85q0 28.35-20.02 48.24t-48.11 19.89H550ZM34.02-550v-267.85q0-28.45 19.89-48.41 19.89-19.96 48.24-19.96H410v68.37H102.15V-550H34.02Zm824.07 0v-267.85H550v-68.37h308.09q28.09 0 48.11 19.96t20.02 48.41V-550h-68.13Z" />
  </svg>
);
