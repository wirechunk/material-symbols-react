import type { SVGProps } from "react";
export const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m240.77-648.85-79.23-78.61 32.61-32.23 78.62 79.23-32 31.61Zm216.54-93.46v-112.3h45.38v112.3h-45.38Zm261.92 95.08-32.62-32.61 79.85-78.62 32 32-79.23 79.23ZM380-100v-188.46l-120-120V-580h440v171.54l-120 120V-100H380Zm45.39-45.39h109.22v-162.3l120-120v-106.92H305.39v106.92l120 120v162.3ZM480-340Z" />
  </svg>
);
