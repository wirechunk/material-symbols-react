import type { SVGProps } from "react";
export const SvgAddBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M460-300h40v-160h160v-40H500v-160h-40v160H300v40h160v160ZM160-160v-640h640v640H160Zm40-40h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
);
