import type { SVGProps } from "react";
export const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M460-120v-160H260L160-380l100-100h200v-80H200v-200h260v-80h40v80h200l100 100-100 100H500v80h260v200H500v160h-40ZM240-600h443.92l60-60-60-60H240v120Zm36.08 280H720v-120H276.08l-60 60 60 60ZM240-600v-120 120Zm480 280v-120 120Z" />
  </svg>
);
