import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-83.79q0-15.21 10.34-25.71t25.62-10.5h215.76q15.28 0 25.78 10.29Q624-99.42 624-84.21T613.66-58.5Q603.32-48 588.04-48H372.28Q357-48 346.5-58.29 336-68.58 336-83.79ZM312-192q-29.7 0-50.85-21.15Q240-234.3 240-264v-576q0-29.7 21.15-50.85Q282.3-912 312-912h336q29.7 0 50.85 21.15Q720-869.7 720-840v576q0 29.7-21.15 50.85Q677.7-192 648-192H312Zm0-120v48h336v-48H312Zm0-72h336v-336H312v336Zm0-408h336v-48H312v48Zm0 0v-48 48Zm0 480v48-48Z" />
  </svg>
);
