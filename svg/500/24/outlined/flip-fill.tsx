import type { SVGProps } from "react";
export const SvgFlipFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M364.78-111.87H202.87q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61h161.91v91H202.87v554.26h161.91v91Zm70.44 79.28v-894.82h91v894.82h-91Zm161.43-79.28v-91h90.28v91h-90.28Zm0-645.26v-91h90.28v91h-90.28Zm160.48 645.26v-91h91q0 37.78-26.61 64.39t-64.39 26.61Zm0-161.43v-91h91v91h-91Zm0-161.2v-91h91v91h-91Zm0-161.43v-91h91v91h-91Zm0-161.2v-91q37.78 0 64.39 26.61t26.61 64.39h-91Z" />
  </svg>
);
