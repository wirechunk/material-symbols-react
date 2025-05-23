import type { SVGProps } from "react";
export const SvgShelfPosition = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-144q-29 0-50.5-21.15T144-216v-528q0-29 21.5-50.5T216-816h528q29 0 50.5 21.5T816-744v528q0 29.7-21.5 50.85Q773-144 744-144H216Zm528-180H216v108h528v-108Zm-96-72h96v-348h-96v348Zm-432 0h96v-348h-96v348Zm168 0h192v-348H384v348Z" />
  </svg>
);
