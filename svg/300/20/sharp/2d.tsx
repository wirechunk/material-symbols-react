import type { SVGProps } from "react";
export const Svg2D = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M319.69-390.15h131.69v-35.7h-96v-36.46h96v-107.54H319.69v35.7h96v36.46h-96v107.54ZM164-164v-632h632v632H164Zm52-52h528v-528H216v528Zm0 0v-528 528Zm284.92-174.15h107.77l23.92-24.31v-131.46l-23.92-23.93H500.92v179.7Zm35.69-35.7v-108.3h60.31v108.3h-60.31Z" />
  </svg>
);
