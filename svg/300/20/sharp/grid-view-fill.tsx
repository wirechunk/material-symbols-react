import type { SVGProps } from "react";
export const SvgGridViewFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-528v-268h268v268H164Zm0 364v-268h268v268H164Zm364-364v-268h268v268H528Zm0 364v-268h268v268H528Z" />
  </svg>
);
