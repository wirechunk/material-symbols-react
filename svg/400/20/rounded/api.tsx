import type { SVGProps } from "react";
export const SvgApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-384-96-96 96-96 96 96-96 96Zm-86-250-96-96 131-131q11-11 24-16t27-5q14 0 27 5t24 16l131 131-96 96-86-86-86 86ZM230-298 99-429q-11-11-16-24t-5-27q0-14 5-27t16-24l131-131 96 96-86 86 86 86-96 96Zm500 0-96-96 86-86-86-86 96-96 131 131q11 11 16 24t5 27q0 14-5 27t-16 24L730-298ZM429-99 298-230l96-96 86 86 86-86 96 96L531-99q-11 11-24 16t-27 5q-14 0-27-5t-24-16Z" />
  </svg>
);
