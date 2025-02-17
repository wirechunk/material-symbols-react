import type { SVGProps } from "react";
export const SvgFort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-144v-144l96-96v-192l-96-96v-144h72v72h84v-72h72v72h84v-72h72v144l-96 96v48h288v-48l-96-96v-144h72v72h84v-72h72v72h84v-72h72v144l-96 96v192l96 96v144H576v-96q0-39.6-28.2-67.8Q519.6-336 480-336q-41 0-68.5 28.2T384-240v96H48Zm72-72h192v-24q0-69.3 49-118.65Q410-408 479.5-408q69.51 0 119 49.35Q648-309.3 648-240v24h192v-42l-96-96v-252l66-66H630l66 66v150H264v-150l66-66H150l66 66v252l-96 96v42Zm360-226Z" />
  </svg>
);
