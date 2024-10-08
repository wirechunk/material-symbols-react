import type { SVGProps } from "react";
export const SvgBottomAppBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-144q-29 0-50.5-21.5T144-216v-528q0-29.7 21.5-50.85Q187-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29-21.15 50.5T744-144H216Zm0-192v120h528v-120H576q-18 22-42.72 35T480-288q-28.93 0-53.96-12.5Q401-313 384-336H216Zm264-24q20.4 0 34.2-13.8Q528-387.6 528-408q0-20.4-13.8-34.2Q500.4-456 480-456q-20.4 0-34.2 13.8Q432-428.4 432-408q0 20.4 13.8 34.2Q459.6-360 480-360Zm-264-48h144q0-50 35-85t85-35q50 0 85 35t35 85h144v-336H216v336Zm0 192h528-528Z" />
  </svg>
);
