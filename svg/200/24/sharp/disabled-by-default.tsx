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
    <path d="M200-200h560v-560H200v560Zm-40 40v-640h640v640H160Zm176-148.46 144-144 144 144L651.54-336l-144-144 144-144L624-651.54l-144 144-144-144L308.46-624l144 144-144 144L336-308.46ZM200-200v-560 560Z" />
  </svg>
);
