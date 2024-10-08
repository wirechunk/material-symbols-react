import type { SVGProps } from "react";
export const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288.62-408v32H136v-448h448v152.62h-32V-792H168v384h120.62ZM376-136v-448h448v448H376Zm32-32h384v-384H408v384Zm192-192Z" />
  </svg>
);
