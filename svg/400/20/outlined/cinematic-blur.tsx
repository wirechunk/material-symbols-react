import type { SVGProps } from "react";
export const SvgCinematicBlur = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m216-816 72 144h96l-72-144h72l72 144h96l-72-144h72l72 144h96l-72-144h144q29.7 0 50.85 21.5Q864-773 864-744v528q0 29-21.15 50.5T792-144H168q-29 0-50.5-21.5T96-216v-528q0-29 20.5-50.5T168-816h48Zm-48 216v384h624v-384H168Zm0 0v384-384Zm168 336h288v-33q0-39.06-39.64-63.03T479.86-384Q415-384 375.5-360.03T336-297v33Zm144.21-144Q510-408 531-429.21t21-51Q552-510 530.79-531t-51-21Q450-552 429-530.79t-21 51Q408-450 429.21-429t51 21Z" />
  </svg>
);
