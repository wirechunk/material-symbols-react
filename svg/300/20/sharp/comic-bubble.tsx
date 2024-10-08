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
    <path d="m432-800-79.77 79.77H239.77v112.46L160-528l79.77 79.77v112.46h112.46L432-256l95-95 160 78-78-160 95-95-79.77-79.77v-112.46H511.77L432-800Zm0-72.54 100.92 100.93h142.69v142.69L776.54-528 671.38-422.85l94.31 193.23-35.31 35.31-193.23-94.31L432-183.46 331.08-284.39H188.39v-142.69L87.46-528l100.93-100.92v-142.69h142.69L432-872.54ZM432-528Z" />
  </svg>
);
