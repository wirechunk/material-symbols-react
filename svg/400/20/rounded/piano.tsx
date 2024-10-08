import type { SVGProps } from "react";
export const SvgPiano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-144q-29 0-50.5-21.5T144-216v-528q0-29.7 21.5-50.85Q187-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29-21.15 50.5T744-144H216Zm0-72h120v-168h-24q-10.2 0-17.1-6.9-6.9-6.9-6.9-17.1v-336h-72v528Zm408 0h120v-528h-72v336q0 10.2-6.9 17.1-6.9 6.9-17.1 6.9h-24v168Zm-240 0h192v-168h-24q-10.2 0-17.1-6.9-6.9-6.9-6.9-17.1v-336h-96v336q0 10.2-6.9 17.1-6.9 6.9-17.1 6.9h-24v168Z" />
  </svg>
);
