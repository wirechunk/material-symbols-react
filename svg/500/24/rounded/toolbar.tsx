import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M202.87-111.87q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61h554.26q37.78 0 64.39 26.61t26.61 64.39v554.26q0 37.78-26.61 64.39t-64.39 26.61H202.87Zm0-529.56h554.26v-115.7H202.87v115.7Zm554.26 91H202.87v347.56h554.26v-347.56Zm-554.26-91v91-91Zm0 0v-115.7 115.7Zm0 91v347.56-347.56Z" />
  </svg>
);
