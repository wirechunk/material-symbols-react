import type { SVGProps } from "react";
export const SvgFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M385-144H216q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h169v72H216v528h169v72Zm59 96v-864h72v864h-72Zm150-96v-72h72v72h-72Zm0-600v-72h72v72h-72Zm150 600v-72h72q0 30-21.15 51T744-144Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72h72v72h-72Zm0-150v-72q29.7 0 50.85 21.15Q816-773.7 816-744h-72Z" />
  </svg>
);
