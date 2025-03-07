import type { SVGProps } from "react";
export const SvgTransform = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M636-48 492-192l51-51 57 57v-102H360q-30 0-51-21t-21-51v-240H96v-72h192v-102l-57 57-51-51 144-144 144 144-51 51-57-57v414h504v72H672v102l57-57 51 51L636-48Zm-36-384v-168H432v-72h168q30 0 51 21t21 51v168h-72Z" />
  </svg>
);
