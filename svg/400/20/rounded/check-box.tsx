import type { SVGProps } from "react";
export const SvgCheckBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m429-438-60-59q-11-11-25-11t-25 11q-11 11-11 25.5t11 25.5l85 85q10.64 11 24.82 11T454-361l187-187q11-11 11-25.5T641-599q-11-11-25-11t-25 11L429-438ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z" />
  </svg>
);
