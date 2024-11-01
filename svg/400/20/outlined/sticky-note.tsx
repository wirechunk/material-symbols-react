import type { SVGProps } from "react";
export const SvgStickyNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M628.5-144H216q-29 0-50.5-21.5T144-216v-528q0-29.7 21.5-50.85Q187-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v412.5L628.5-144ZM576-216v-96q0-31 20.5-51.5T648-384h96v-360H216v528h360ZM444-336h72v-228h108v-72H336v72h108v228Zm132 120Zm-360 0v-528 528Z" />
  </svg>
);
