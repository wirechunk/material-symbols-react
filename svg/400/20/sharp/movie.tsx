import type { SVGProps } from "react";
export const SvgMovie = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h120l72 144h96l-72-144h72l72 144h96l-72-144h72l72 144h96l-72-144h216v576H96Zm72-360v288h624v-288H168Zm0 0v288-288Z" />
  </svg>
);
