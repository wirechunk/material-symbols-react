import type { SVGProps } from "react";
export const SvgAlignStretch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-576v-216H96v-72h768v72H672v216H288ZM96-96v-72h192v-216h384v216h192v72H96Z" />
  </svg>
);
