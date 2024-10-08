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
    <path d="m220.78-220.78-60.27 60.27q-23.34 23.34-53.53 10.72-30.2-12.63-30.2-45.08v-590.35q0-41 28.5-69.5t69.5-28.5h610.44q41 0 69.5 28.5t28.5 69.5v466.44q0 41-28.5 69.5t-69.5 28.5H220.78Zm-30-98h594.44v-466.44H174.78v483l16-16.56Zm-16 0v-466.44 466.44Z" />
  </svg>
);
