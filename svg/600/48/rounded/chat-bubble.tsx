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
    <path d="m225.87-225.87-92.04 92.04q-19.09 19.09-43.53 8.96Q65.87-135 65.87-161.04v-653.87q0-32.74 23.35-56.26 23.36-23.53 55.87-23.53h669.82q32.74 0 56.26 23.53 23.53 23.52 23.53 56.26v509.82q0 32.51-23.53 55.87-23.52 23.35-56.26 23.35H225.87Zm-26-79.22h615.04v-509.82H145.09v570.6l54.78-60.78Zm-54.78 0v-509.82 509.82Z" />
  </svg>
);
