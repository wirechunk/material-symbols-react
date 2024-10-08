import type { SVGProps } from "react";
export const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm384-240L168-611v347h624v-347L480-432Zm0-84 311-180H170l310 180Zm-312-95v-85 432-347Z" />
  </svg>
);
