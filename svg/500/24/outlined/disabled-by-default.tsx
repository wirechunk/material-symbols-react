import type { SVGProps } from "react";
export const SvgDisabledByDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m336-277.37 144-144 144 144L682.63-336l-144-144 144-144L624-682.63l-144 144-144-144L277.37-624l144 144-144 144L336-277.37Zm-133.13 165.5q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61h554.26q37.78 0 64.39 26.61t26.61 64.39v554.26q0 37.78-26.61 64.39t-64.39 26.61H202.87Zm0-91h554.26v-554.26H202.87v554.26Zm0-554.26v554.26-554.26Z" />
  </svg>
);
