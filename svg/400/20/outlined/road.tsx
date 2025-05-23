import type { SVGProps } from "react";
export const SvgRoad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-192v-576h72v576h-72Zm252 0v-144h72v144h-72Zm252 0v-576h72v576h-72ZM444-408v-144h72v144h-72Zm0-216v-144h72v144h-72Z" />
  </svg>
);
