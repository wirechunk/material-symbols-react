import type { SVGProps } from "react";
export const SvgTableView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-96v-624h624v624H240Zm72-72h204v-132H312v132Zm276 0h204v-132H588v132ZM96-240v-624h624v72H168v552H96Zm216-132h204v-132H312v132Zm276 0h204v-132H588v132ZM312-576h480v-72H312v72Z" />
  </svg>
);
