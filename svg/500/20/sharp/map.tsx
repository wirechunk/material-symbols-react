import type { SVGProps } from "react";
export const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m600-135.63-240-72-224.13 75.83v-618.18L360-824.37l240 72 224.13-75.83v618.18L600-135.63Zm-36-97.72v-443.3l-168-50v443.3l168 50Zm72-2 105.13-34.8V-711.7L636-676.65v441.3ZM218.87-248.3 324-283.35v-441.3l-105.13 34.8v441.55ZM636-676.65v441.3-441.3Zm-312-48v441.3-441.3Z" />
  </svg>
);
