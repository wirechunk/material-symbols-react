import type { SVGProps } from "react";
export const SvgViewArray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-288v-384q0-20 14-34t34-14q20 0 34 14t14 34v384q0 20-14 34t-34 14q-20 0-34-14t-14-34Zm192 48q-20 0-34-14t-14-34v-384q0-20 14-34t34-14h288q20 0 34 14t14 34v384q0 20-14 34t-34 14H336Zm384-48v-384q0-20 14-34t34-14q20 0 34 14t14 34v384q0 20-14 34t-34 14q-20 0-34-14t-14-34Zm-360-24h240v-336H360v336Zm120-168Z" />
  </svg>
);
