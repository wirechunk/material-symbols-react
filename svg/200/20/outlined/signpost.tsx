import type { SVGProps } from "react";
export const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M464-136v-192H260l-76-88 76-88h204v-72H232v-176h232v-72h32v72h204l76 88-76 88H496v72h232v176H496v192h-32ZM264-608h420.92l52-56-52-56H264v112Zm11.08 248H696v-112H275.08l-52 56 52 56ZM264-608v-112 112Zm432 248v-112 112Z" />
  </svg>
);
