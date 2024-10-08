import type { SVGProps } from "react";
export const SvgComicBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m432-800-79.77 79.77H239.77v112.46L160-528l79.77 79.77v112.46h112.46L432-256l95-95 160 78-78-160 95-95-79.77-79.77v-112.46H511.77L432-800Zm0-101 109.26 109.26h154.48v154.48L805-528 696-419l102 209q6 11 3.5 22T791-169q-8 8-19 10.5t-22-3.5L541-264 432-155 322.74-264.26H168.26v-154.48L59-528l109.26-109.26v-154.48h154.48L432-901Zm0 373Z" />
  </svg>
);
