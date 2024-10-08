import type { SVGProps } from "react";
export const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M105.87-510v-344.7H450V-510H105.87Zm0 404.13V-450H450v344.13H105.87ZM510-510v-344.7h344.7V-510H510Zm0 404.13V-450h344.7v344.13H510ZM185.09-589.78h185.69v-185.13H185.09v185.13Zm404.69 0h185.13v-185.13H589.78v185.13Zm0 404.69h185.13v-185.69H589.78v185.69Zm-404.69 0h185.69v-185.69H185.09v185.69Zm404.69-404.69Zm0 219Zm-219 0Zm0-219Z" />
  </svg>
);
