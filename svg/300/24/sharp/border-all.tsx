import type { SVGProps } from "react";
export const SvgBorderAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-140v-680h680v680H140Zm620-60v-250H510v250h250Zm0-560H510v250h250v-250Zm-560 0v250h250v-250H200Zm0 560h250v-250H200v250Z" />
  </svg>
);
