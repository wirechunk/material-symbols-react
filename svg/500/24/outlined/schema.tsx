import type { SVGProps } from "react";
export const SvgSchema = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M150.91-25.41V-280h100v-72.59h-100v-254.82h100V-680h-100v-254.59h292.68V-680h-100v72.59h100v81.91h112.82v-81.91h292.68v254.82H556.41v-81.91H443.59v81.91h-100V-280h100v254.59H150.91Zm91-91h110.68V-189H241.91v72.59Zm0-327.18h110.68v-72.82H241.91v72.82Zm405.5 0h110.68v-72.82H647.41v72.82ZM241.91-771h110.68v-72.59H241.91V-771Zm55.46-36.41Zm0 327.41Zm405.5 0Zm-405.5 327.41Z" />
  </svg>
);
