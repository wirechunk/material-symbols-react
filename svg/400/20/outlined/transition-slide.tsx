import type { SVGProps } from "react";
export const SvgTransitionSlide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-192q-33 0-52.5-19.5T72-264v-432q0-33 19.5-52.5T144-768h96q33 0 52.5 19.5T312-696v432q0 33-19.5 52.5T240-192h-96Zm0-72h96v-432h-96v432Zm312 72q-33 0-52.5-19.5T384-264v-432q0-33 19.5-52.5T456-768h360q33 0 52.5 19.5T888-696v432q0 33-19.5 52.5T816-192H456Zm0-72h360v-432H456v432Zm-216 0v-432 432Zm216 0v-432 432Z" />
  </svg>
);
