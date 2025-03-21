import type { SVGProps } from "react";
export const SvgTabs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-144q-29 0-50.5-21.5T144-216v-528q0-29.7 21.5-50.85Q187-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29-21.15 50.5T744-144H216Zm0-72h528v-264H216v264Zm0-336h528v-192H216v192Zm444-72q15.3 0 25.65-10.29Q696-644.58 696-659.79t-10.35-25.71Q675.3-696 660-696H492q-15.3 0-25.65 10.29Q456-675.42 456-660.21t10.35 25.71Q476.7-624 492-624h168Zm-444 60v-180 180Z" />
  </svg>
);
