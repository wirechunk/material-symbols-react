import type { SVGProps } from "react";
export const SvgEmoticon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-288q-20 0-34-14t-14-34q0-20 14-34t34-14q20 0 34 14t14 34q0 20-14 34t-34 14Zm0-288q-20 0-34-14t-14-34q0-20 14-34t34-14q20 0 34 14t14 34q0 20-14 34t-34 14Zm96 132v-72h192v72H384Zm284 204-59-40q30-43 46.5-94T672-480q0-55-16.5-105.5T610-678l60-40q35 51 54.5 111T744-480q0 67-20 128t-56 112Z" />
  </svg>
);
