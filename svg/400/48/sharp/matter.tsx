import type { SVGProps } from "react";
export const SvgMatter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-562q-60 0-113-21.5T272-642l55-33q24 18 55 31.5t68 19.5v-218l30-18 30 18v218q36-6 67.5-19.5T633-675l55 33q-42 37-95 58.5T480-562Zm-66 397-56-30q1-8 1.5-15t.5-15q0-24-5.5-50.5T339-328L151-214l-31-17v-35l187-113q-23-27-50.5-47.5T200-458v-64q96 29 158 110.5T420-225q0 16-1.5 31t-4.5 29Zm132 0q-3-14-4.5-29t-1.5-31q0-105 62-186.5T760-522v64q-29 11-56.5 31.5T653-379l187 113v35l-31 17-188-114q-10 26-15.5 52.5T600-225q0 8 .5 15t1.5 15l-56 30Z" />
  </svg>
);
