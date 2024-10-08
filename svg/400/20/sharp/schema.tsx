import type { SVGProps } from "react";
export const SvgSchema = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-72v-216h96v-84h-96v-216h96v-60h-96v-216h264v216h-96v60h96v72h96v-72h264v216H552v-72h-96v72h-96v84h96v216H192Zm72-72h120v-72H264v72Zm0-300h120v-72H264v72Zm360 0h120v-72H624v72ZM264-720h120v-72H264v72Zm60-36Zm0 276Zm360 0ZM324-180Z" />
  </svg>
);
