import type { SVGProps } from "react";
export const SvgChurch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-288l144-48v-144l204-122v-58h-84v-72h84v-84h72v84h84v72h-84v58l204 122v144l144 48v288H528v-144q0-20.4-13.8-34.2Q500.4-288 480-288q-20.4 0-34.2 13.8Q432-260.4 432-240v144H96Zm72-72h192v-72q0-50.16 35-85.08T480-360q50 0 85 34.92T600-240v72h192v-164l-144-48v-155L480-636 312-535v155l-144 48v164Zm312-252q23 0 41.5-18.5T540-480q0-23-18.5-41.5T480-540q-23 0-41.5 18.5T420-480q0 23 18.5 41.5T480-420Zm0 0Z" />
  </svg>
);
