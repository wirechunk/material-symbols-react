import type { SVGProps } from "react";
export const SvgPostFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm120-240h432v-96H264v96Zm0 96h432v-48H264v48Z" />
  </svg>
);
