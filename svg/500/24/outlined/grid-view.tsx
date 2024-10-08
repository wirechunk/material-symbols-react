import type { SVGProps } from "react";
export const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M111.87-520v-328.13H440V-520H111.87Zm0 408.13V-440H440v328.13H111.87ZM520-520v-328.13h328.13V-520H520Zm0 408.13V-440h328.13v328.13H520ZM202.87-611H349v-146.13H202.87V-611ZM611-611h146.13v-146.13H611V-611Zm0 408.13h146.13V-349H611v146.13Zm-408.13 0H349V-349H202.87v146.13ZM611-611Zm0 262Zm-262 0Zm0-262Z" />
  </svg>
);
