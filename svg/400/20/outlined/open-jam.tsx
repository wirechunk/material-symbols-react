import type { SVGProps } from "react";
export const SvgOpenJam = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-144h432v-72H516v-275l59 59 51-50-146-146-145 146 51 50 58-58v274H264v72Zm216-336ZM168-336q-29.7 0-50.85-21.15Q96-378.3 96-408v-336q0-29.7 21.15-50.85Q138.3-816 168-816h624q29.7 0 50.85 21.15Q864-773.7 864-744v336q0 29.7-21.15 50.85Q821.7-336 792-336H588v-72h204v-336H168v336h204v72H168Z" />
  </svg>
);
