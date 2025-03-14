import type { SVGProps } from "react";
export const SvgPageless = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M400-60.78H126.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15V-400h106v233.22H400v106Zm160 0v-106h273.78V-400h106v233.22q0 44.3-30.84 75.15-30.85 30.85-75.16 30.85H560ZM20.78-560v-233.22q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85H400v106H126.78V-560h-106Zm813 0v-233.22H560v-106h273.78q44.31 0 75.16 30.85 30.84 30.85 30.84 75.15V-560h-106Z" />
  </svg>
);
