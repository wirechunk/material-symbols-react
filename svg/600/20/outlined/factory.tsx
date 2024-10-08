import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M78.48-78.48V-563.3l299.04-135.27v85.13l192-84.56v128.7h312v490.82H78.48Zm98-98h607.04v-294.9H475.48V-549l-192 84v-83.13l-107 48.78v322.87ZM435.52-240h88.96v-168h-88.96v168Zm-165.04 0H360v-168h-89.52v168ZM600-240h89.52v-168H600v168Zm281.52-329.52H669.74l48-307.48h113.52l50.26 307.48ZM176.48-176.48h607.04-607.04Z" />
  </svg>
);
