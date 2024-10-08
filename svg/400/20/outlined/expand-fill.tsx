import type { SVGProps } from "react";
export const SvgExpandFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-96v-72h576v72H192Zm288-144L336-384l51-51 57 57v-204l-57 57-51-51 144-144 144 144-51 51-57-57v204l57-57 51 51-144 144ZM192-792v-72h576v72H192Z" />
  </svg>
);
