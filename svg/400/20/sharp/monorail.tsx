import type { SVGProps } from "react";
export const SvgMonorail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M444-288h72v120h204v72H240v-72h204v-120ZM336-864h288q60 0 102 42t42 102v378q0 53.1-36.9 89.55Q694.2-216 642-216h-78v-120H396v120h-78q-53.1 0-89.55-36.45Q192-288.9 192-342v-378q0-60 41.85-102T336-864Zm-72 384v138q0 23.4 15.3 38.7Q294.6-288 318-288h6v-120h312v120h6q22.5 0 38.25-15.3T696-342v-138H264Zm0-192v120h432v-120H264Zm72-120q-23 0-41.5 13.5T268-744h424q-8-21-26.62-34.5T624-792H336Zm-72 312h432-432Zm72-264h356-424 68Z" />
  </svg>
);
