import type { SVGProps } from "react";
export const SvgHost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168.5-144q-33.5 0-53-19.5T96-216v-528q0-33 19.5-52.5t53-19.5h203q33.5 0 53 19.5T444-744v528q0 33-19.5 52.5t-53 19.5h-203Zm420 0q-33.5 0-53-19.5T516-216v-528q0-33 19.5-52.5t53-19.5h203q33.5 0 53 19.5T864-744v528q0 33-19.5 52.5t-53 19.5h-203ZM168-216h204v-528H168v528Zm420 0h204v-528H588v528ZM204-360h132v-72H204v72Zm420 0h132v-72H624v72ZM204-480h132v-72H204v72Zm420 0h132v-72H624v72ZM204-600h132v-72H204v72Zm420 0h132v-72H624v72ZM168-216h204-204Zm420 0h204-204Z" />
  </svg>
);
