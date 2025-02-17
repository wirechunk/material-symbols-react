import type { SVGProps } from "react";
export const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M135.87-528v-296.13H432V-528H135.87Zm0 392.13V-432H432v296.13H135.87ZM528-528v-296.13h296.13V-528H528Zm0 392.13V-432h296.13v296.13H528ZM218.87-611H349v-130.13H218.87V-611ZM611-611h130.13v-130.13H611V-611Zm0 392.13h130.13V-349H611v130.13Zm-392.13 0H349V-349H218.87v130.13ZM611-611Zm0 262Zm-262 0Zm0-262Z" />
  </svg>
);
