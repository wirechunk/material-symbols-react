import type { SVGProps } from "react";
export const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m243.08-280-59.04 59.04q-13.27 13.27-30.66 6.17-17.38-7.1-17.38-25.9v-526.69q0-24.32 16.15-40.47T192.62-824h574.76q24.32 0 40.47 16.15T824-767.38v430.76q0 24.32-16.15 40.47T767.38-280h-524.3ZM230-312h537.38q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-430.76q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H192.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v518.15L230-312Zm-62 0v-480 480Z" />
  </svg>
);
