import type { SVGProps } from "react";
export const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M330.35-144q-20.35 0-36.82-9.45T267-180L116-444q-10-17.13-10-36.07Q106-499 116-516l151-264q10.04-17.1 26.48-26.55Q309.91-816 330-816h299.65q20.35 0 36.82 9.45T693-780l151 264q10 17.13 10 36.07Q854-461 844-444L693-180q-10.04 17.1-26.48 26.55Q650.09-144 630-144H330.35Zm-.35-72h300l151-264-151-264H330L179-480l151 264Zm150-264Z" />
  </svg>
);
