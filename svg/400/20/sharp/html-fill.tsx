import type { SVGProps } from "react";
export const SvgHtmlFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-384v-192h48v72h48v-72h48v192h-48v-72h-48v72H96Zm240 0v-144h-48v-48h144v48h-48v144h-48Zm144 0v-192h240v192h-48v-144h-48v96h-48v-96h-48v144h-48Zm288 0v-192h48v144h72v48H768Z" />
  </svg>
);
