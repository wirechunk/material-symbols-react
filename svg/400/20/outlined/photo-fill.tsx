import type { SVGProps } from "react";
export const SvgPhotoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-144q-30 0-51-21.5T144-216v-528q0-29 21-50.5t51-21.5h528q30 0 51 21.5t21 50.5v528q0 29-21 50.5T744-144H216Zm48-144h432L552-480 444-336l-72-96-108 144Z" />
  </svg>
);
