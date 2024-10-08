import type { SVGProps } from "react";
export const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m96-96 144-336h144l48-192h288L864-96H96Zm109-72h564L665-552H488l-48 192H288l-83 192Zm335-600v-144h72v144h-72Zm164 67-51-51 102-102 51 51-102 102Zm-256 0L347-803l50-51 102 102-51 51Zm321 533H205h564Z" />
  </svg>
);
