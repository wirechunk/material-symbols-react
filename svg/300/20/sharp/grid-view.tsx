import type { SVGProps } from "react";
export const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-528v-268h268v268H164Zm0 364v-268h268v268H164Zm364-364v-268h268v268H528Zm0 364v-268h268v268H528ZM216-580h164v-164H216v164Zm364 0h164v-164H580v164Zm0 364h164v-164H580v164Zm-364 0h164v-164H216v164Zm364-364Zm0 200Zm-200 0Zm0-200Z" />
  </svg>
);
