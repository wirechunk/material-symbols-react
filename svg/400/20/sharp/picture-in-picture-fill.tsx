import type { SVGProps } from "react";
export const SvgPictureInPictureFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm360-240h288v-216H456v216Z" />
  </svg>
);
