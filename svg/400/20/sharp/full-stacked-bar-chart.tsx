import type { SVGProps } from "react";
export const SvgFullStackedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-192v-96h144v96H192Zm0-144v-144h144v144H192Zm0-192v-240h144v240H192Zm216 336v-240h144v240H408Zm0-288v-144h144v144H408Zm0-192v-96h144v96H408Zm216 480v-48h144v48H624Zm0-96v-144h144v144H624Zm0-192v-288h144v288H624Z" />
  </svg>
);
