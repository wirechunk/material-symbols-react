import type { SVGProps } from "react";
export const SvgArticleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M300-300h240v-40H300v40Zm0-160h360v-40H300v40Zm0-160h360v-40H300v40ZM160-160v-640h640v640H160Z" />
  </svg>
);
