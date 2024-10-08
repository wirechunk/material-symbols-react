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
    <path d="M200-200h560v-560H200v560Zm-60 60v-680h680v680H140Zm196-154.23 144-144 144 144L665.77-336l-144-144 144-144L624-665.77l-144 144-144-144L294.23-624l144 144-144 144L336-294.23ZM200-200v-560 560Z" />
  </svg>
);
