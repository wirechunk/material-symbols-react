import type { SVGProps } from "react";
export const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M820-140H140v-680h680v680ZM510-450v250h250v-250H510Zm0-60h250v-250H510v250Zm-60 0v-250H200v250h250Zm0 60H200v250h250v-250Z" />
  </svg>
);
