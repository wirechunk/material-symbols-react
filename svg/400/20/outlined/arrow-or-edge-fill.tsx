import type { SVGProps } from "react";
export const SvgArrowOrEdgeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M312-144 168-288l50-50 58 57v-223H144q-29.7 0-50.85-21.15Q72-546.3 72-576v-240h72v240h132q29.7 0 50.85 21.15Q348-533.7 348-504v223l56.7-57.4L456-288 312-144Zm336 0L504-288l50.3-50.4 57.48 57.4v-223q0-29.7 21.11-50.85Q654-576 684-576h132v-240h72v240q0 30-21.15 51T816-504H684v223l57-57 51 50-144 144Z" />
  </svg>
);
