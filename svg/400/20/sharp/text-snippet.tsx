import type { SVGProps } from "react";
export const SvgTextSnippet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216h528v-354L570-744H216v528Zm-72 72v-672h456l216 216v456H144Zm144-144h384v-72H288v72Zm0-144h384v-72H288v72Zm0-144h288v-72H288v72Zm-72 360v-528 528Z" />
  </svg>
);
