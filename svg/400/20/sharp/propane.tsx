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
    <path d="M288-288h384q70 0 119-49t49-119q0-70-49-119t-119-49H288q-70 0-119 49t-49 119q0 70 49 119t119 49Zm192-168Zm-72-240h144v-48H408v48ZM288-120v-96q-100 0-170-70T48-456q0-100 70-170t170-70h48v-120h288v120h48q100 0 170 70t70 170q0 100-70 170t-170 70v96h-72v-96H360v96h-72Z" />
  </svg>
);
