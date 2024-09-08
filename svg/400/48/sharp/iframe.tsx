import type { SVGProps } from "react";
export const SvgIframe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M460-420h200v-80H460v80Zm-60 60v-200h320v200H400ZM80-160v-640h800v640H80Zm60-60h680v-436H140v436Z" />
  </svg>
);
