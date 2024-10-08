import type { SVGProps } from "react";
export const SvgViewInAr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-152 192-316v-328l288-166 288 166v328L480-152Zm-36-102v-206L264-568v211l180 103Zm72 0 180-103v-210L516-459v205ZM96-672v-192h192v72H168v120H96ZM288-96H96v-192h72v120h120v72Zm384 0v-72h120v-120h72v192H672Zm120-576v-120H672v-72h192v192h-72ZM480-522l174-104-174-100-174 100 174 104Zm0 40Zm0-40Zm36 63Zm-72-1Z" />
  </svg>
);
