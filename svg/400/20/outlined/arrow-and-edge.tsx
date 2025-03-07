import type { SVGProps } from "react";
export const SvgArrowAndEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-144 336-288l50-50 58 57v-150.77q0-29.8-21.15-51.01Q401.7-504 372-504H144q-29.7 0-50.85-21.15Q72-546.3 72-576v-240h72v240h228q32.4 0 60.3 13.16Q460.2-549.69 480-527q19.8-22.69 47.7-35.84Q555.6-576 588-576h228v-240h72v240q0 30-21.15 51T816-504H588q-29.7 0-50.85 21.15Q516-461.7 516-432v151l56.7-57.4L624-288 480-144Z" />
  </svg>
);
