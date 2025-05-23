import type { SVGProps } from "react";
export const SvgSceneFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M792-96v-600q0-30-21-51t-51-21l-36 12-12 35q0 11-7 18t-17 7H436q-14 0-20.5-12.5t.5-26.5l77-148q6-14 19.5-21.5T541-912h83q20 0 34 14t14 34v36l48-12q60 0 102 42t42 102v600h-72Zm-600 0q-40 0-68-28t-28-68v-120q0-30 21-51t51-21q30 0 51 21t21 51v72h336v-72q0-30 21-51t51-21q30 0 51 21t21 51v120q0 40-28 68t-68 28H192Zm96-192v-24q0-50-35-85t-85-35v-48q0-30 21-51t51-21h336q30 0 51 21t21 51v48q-50 0-85 35t-35 85v24H288Z" />
  </svg>
);
