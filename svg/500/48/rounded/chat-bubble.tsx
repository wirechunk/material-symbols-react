import type { SVGProps } from "react";
export const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M234.02-234.02 132.2-132.2q-16.16 16.16-37.17 7.45-21.01-8.7-21.01-31.08v-662.02q0-27.7 20.27-48.03 20.26-20.34 47.86-20.34h675.7q27.7 0 48.03 20.34 20.34 20.33 20.34 48.03v515.7q0 27.6-20.34 47.86-20.33 20.27-48.03 20.27H234.02Zm-26-68.13h609.83v-515.7h-675.7v587.57l65.87-71.87Zm-65.87 0v-515.7 515.7Z" />
  </svg>
);
