import type { SVGProps } from "react";
export const SvgScoreboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M576-384v-192h144v192H576Zm48-48h48v-96h-48v96Zm-384 48v-120h96v-24h-96v-48h144v120h-96v24h96v48H240Zm216-136v-48h48v48h-48Zm0 128v-48h48v48h-48ZM96-192v-576h192v-72h72v72h240v-72h72v72h192v576H96Zm72-72h288v-48h48v48h288v-432H504v48h-48v-48H168v432Zm0 0v-432 432Z" />
  </svg>
);
