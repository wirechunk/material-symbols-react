import type { SVGProps } from "react";
export const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm288-168h288v-216H456v216Zm72-72v-72h144v72H528ZM168-264v-432 432Z" />
  </svg>
);
