import type { SVGProps } from "react";
export const SvgIframe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-432h192v-72H480v72Zm-48 48v-168h288v168H432ZM96-192v-576h768v576H96Zm72-72h624v-360H168v360Z" />
  </svg>
);
