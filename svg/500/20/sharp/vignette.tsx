import type { SVGProps } from "react";
export const SvgVignette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-312q100 0 170-49t70-119q0-70-70-119t-170-49q-100 0-170 49t-70 119q0 70 70 119t170 49Zm0-80.61q-66.65 0-113.02-25.42-46.37-25.41-46.37-61.97t46.37-61.97q46.37-25.42 113.02-25.42t113.02 25.42q46.37 25.41 46.37 61.97t-46.37 61.97Q546.65-392.61 480-392.61ZM87.87-183.87v-592.26h784.26v592.26H87.87Zm83-83h618.26v-426.26H170.87v426.26Zm0 0v-426.26 426.26Z" />
  </svg>
);
