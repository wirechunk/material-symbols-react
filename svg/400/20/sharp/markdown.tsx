import type { SVGProps } from "react";
export const SvgMarkdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m600-384 96-96-34-34-38 38v-100h-48v100l-38-39-34 35 96 96ZM96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm0 0v-432 432Zm72-120h48v-144h24v96h48v-96h24v144h48v-192H240v192Z" />
  </svg>
);
