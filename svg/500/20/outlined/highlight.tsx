import type { SVGProps } from "react";
export const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m220.87-630.63-90.02-90.02 58.65-58.65 90.02 90.02-58.65 58.65ZM438.5-747.59V-875h83v127.41h-83Zm300.63 116.96-58.41-58.65 89.78-90.5 58.65 59.13-90.02 90.02ZM373-82.13v-198.46l-96-96v-204.43h406v204.43l-96 96v198.46H373Zm83-83h48v-150.24l96-96v-89.76H360v89.76l96 96v150.24Zm24-176Z" />
  </svg>
);
