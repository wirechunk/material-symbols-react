import type { SVGProps } from "react";
export const SvgPictureInPictureMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M768-96H192v-768h576v768Zm-72-72v-624H264v624h432Zm0-624H264h432Zm-48 336v-288H432v288h216Zm-72-72h-72v-144h72v144Z" />
  </svg>
);
