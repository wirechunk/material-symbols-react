import type { SVGProps } from "react";
export const SvgLanFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-96v-240h108v-180h192v-108H336v-240h288v240H516v108h192v180h108v240H528v-240h108v-108H324v108h108v240H144Z" />
  </svg>
);
