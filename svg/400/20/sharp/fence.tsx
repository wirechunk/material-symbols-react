import type { SVGProps } from "react";
export const SvgFence = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M227.89-192v-144H156v-72h71.89v-72H156v-72h72v-108l107.76-108 71.83 72 72.74-72 71.83 72L624-768l108 108v108h72v72h-72v72h72v72h-72v144H227.89ZM300-552h72v-78l-36-36-36 35.91V-552Zm144 0h72v-78l-36-36-36 35.91V-552Zm144 0h72v-78.09L624-666l-36 36v78ZM300-408h72v-72h-72v72Zm144 0h72v-72h-72v72Zm144 0h72v-72h-72v72ZM300-264h72v-72h-72v72Zm144 0h72v-72h-72v72Zm144 0h72v-72h-72v72Z" />
  </svg>
);
