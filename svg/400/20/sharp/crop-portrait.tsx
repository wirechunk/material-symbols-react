import type { SVGProps } from "react";
export const SvgCropPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-96v-768h576v768H192Zm72-72h432v-624H264v624Zm0 0v-624 624Z" />
  </svg>
);
