import type { SVGProps } from "react";
export const SvgTramFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-264v-360q0-67 61-105.5T457-768l24-48H288v-48h384v48H535l-24 48q145 0 201 39t56 105v360q0 54-35 94t-88 48l51 50v24h-78l-72-72H414l-72 72h-78v-24l50-50q-53-8-87.5-48T192-264Zm288 24q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14ZM264-456h432v-120H264v120Z" />
  </svg>
);
