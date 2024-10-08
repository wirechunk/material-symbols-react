import type { SVGProps } from "react";
export const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-288q-29 0-50.5-21.5T144-360v-240q0-29 21.5-50.5T216-672h528q29.7 0 50.85 21.5Q816-629 816-600v240q0 29-21.15 50.5T744-288H216Zm0-72h528v-240H216v240Zm-72-384v-72h672v72H144Zm0 600v-72h672v72H144Zm72-456v240-240Z" />
  </svg>
);
