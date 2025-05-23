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
    <path d="M264-144h432v-72H516v-275l59 59 51-50-146-146-145 146 51 50 58-58v274H264v72Zm216-336ZM96-336v-480h768v480H588v-72h204v-336H168v336h204v72H96Z" />
  </svg>
);
