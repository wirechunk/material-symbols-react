import type { SVGProps } from "react";
export const SvgBoxFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-576l96-96h480l96 96v576H144Zm78-552h516l-48-48H270l-48 48Zm114 360 144-72 144 72v-288H336v288Z" />
  </svg>
);
