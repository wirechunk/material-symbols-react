import type { SVGProps } from "react";
export const SvgFanIndirect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96 348-225l50-51 46 43v-247h72v247l45-43 51 51L480-96ZM177-240 48-372l129-132 51 51-43 45h103v-168h72v240H185l43 46-51 50Zm605 0-50-50 42-46H600v-240h72v168h102l-42-45 50-51 130 132-130 132ZM96-524v-292h768v292l-72-73v-147H168v147l-72 73Z" />
  </svg>
);
