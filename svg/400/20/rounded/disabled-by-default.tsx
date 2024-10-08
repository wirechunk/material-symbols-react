import type { SVGProps } from "react";
export const SvgDisabledByDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-429 105 105q11 11 25.5 10.5T636-325q11-11 11-25.5T636-376L531-480l105-105q11-11 11-25.5T636-636q-11-11-25.5-11T585-636L480-531 375-636q-11-11-25-11t-25 11q-11 11-11 25.5t11 25.5l104 105-105 105q-11 11-10.5 25t11.5 25q11 11 25.5 11t25.5-11l104-104ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z" />
  </svg>
);
