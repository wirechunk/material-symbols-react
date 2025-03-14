import type { SVGProps } from "react";
export const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M218.87-135.87q-34.48 0-58.74-24.61-24.26-24.61-24.26-58.39v-522.26q0-33.78 24.26-58.39t58.74-24.61h522.26q34.48 0 58.74 24.61 24.26 24.61 24.26 58.39v522.26q0 33.78-24.26 58.39t-58.74 24.61H218.87Zm0-83h522.26v-522.26H218.87v522.26Zm41.06-66.26h440.14L552-484.78l-108 144-72-96-112.07 151.65Zm-41.06 66.26v-522.26 522.26Z" />
  </svg>
);
