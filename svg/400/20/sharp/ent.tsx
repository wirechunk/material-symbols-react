import type { SVGProps } from "react";
export const SvgEnt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M380-96h73l22-240h125v-72H481l7-72h184v-72H423L380-96Zm-116 0v-175q-57-48-88.5-115.57T144-529q0-139.58 98.29-237.29Q340.58-864 481-864q109 0 196 58.5T792-653l80 269H768v192H600v96h-72v-168h168v-192h80l-52-173q-22-72-89.5-117.5T481-792q-111 0-188 76.63T216-529q0 58.93 25 111.96Q266-364 311-326l25 22v208h-72Zm232-348Z" />
  </svg>
);
