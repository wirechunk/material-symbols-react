import type { SVGProps } from "react";
export const SvgSimCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M312-240h72v-72h-72v72Zm0-144h72v-144h-72v144Zm132 144h72v-144h-72v144Zm0-216h72v-72h-72v72Zm132 216h72v-72h-72v72Zm0-144h72v-144h-72v144ZM192-96v-576l192-192h384v768H192Zm72-72h432v-624H414L264-642v474Zm0 0h432-432Z" />
  </svg>
);
