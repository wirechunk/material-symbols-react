import type { SVGProps } from "react";
export const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M279.52-124.78v-48L336-229.83H174.78q-41 0-69.5-28.49-28.5-28.5-28.5-69.51v-409.39q0-41 28.5-69.5t69.5-28.5h610.44q41 0 69.5 28.5t28.5 69.5v409.39q0 41.01-28.5 69.51-28.5 28.49-69.5 28.49H624l56.48 57.05v48H279.52ZM174.78-327.83h610.44v-409.39H174.78v409.39Zm0 0v-409.39 409.39Z" />
  </svg>
);
