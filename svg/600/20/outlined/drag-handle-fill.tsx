import type { SVGProps } from "react";
export const SvgDragHandleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M172.78-334v-98h614.44v98H172.78Zm0-194v-98h614.44v98H172.78Z" />
  </svg>
);
