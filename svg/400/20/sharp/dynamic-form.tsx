import type { SVGProps } from "react";
export const SvgDynamicForm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-516v-252h432v252H96Zm72-72h288v-108H168v108ZM96-192v-252h504v252H96Zm72-72h360v-108H168v108Zm504 72v-324h-72v-252h264l-69 173h69L672-192ZM192-294h48v-48h-48v48Zm0-324h48v-48h-48v48Zm-24 30v-108 108Zm0 324v-108 108Z" />
  </svg>
);
