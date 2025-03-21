import type { SVGProps } from "react";
export const SvgArrowOrEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M312-144 168-288l50-50 58 57v-223H72v-312h72v240h204v295l56.7-57.4L456-288 312-144Zm336 0L504-288l50-50 58 57v-295h204v-240h72v312H684v223l57-57 51 50-144 144Z" />
  </svg>
);
