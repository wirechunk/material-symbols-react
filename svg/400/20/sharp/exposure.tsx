import type { SVGProps } from "react";
export const SvgExposure = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm72-72h528v-528L216-216Zm360-48v-72h-72v-48h72v-72h48v72h72v48h-72v72h-48ZM264-576h192v-48H264v48Z" />
  </svg>
);
