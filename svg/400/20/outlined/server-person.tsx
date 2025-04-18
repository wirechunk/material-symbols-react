import type { SVGProps } from "react";
export const SvgServerPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-96q-33 0-52.5-19.5T192-168v-624q0-33 19.5-52.5T264-864h432q33 0 52.5 19.5T768-792v624q0 33-19.5 52.5T696-96H576l-48-72h-96l-48 72H264Zm0-72h82l48-72h172l48 72h82v-624H264v624Zm72-216h288v-33q0-47-45-67t-99-20q-54 0-99 20t-45 67v33Zm144.21-144Q510-528 531-549.21t21-51Q552-630 530.79-651t-51-21Q450-672 429-650.79t-21 51Q408-570 429.21-549t51 21Zm-.21 48Z" />
  </svg>
);
