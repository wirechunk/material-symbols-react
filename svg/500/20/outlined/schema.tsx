import type { SVGProps } from "react";
export const SvgSchema = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M182.91-57.41V-288h96v-76.59h-96v-230.82h96V-648h-96v-230.59h276.68V-648h-96v52.59h96v73.91h88.82v-73.91h276.68v230.82H548.41v-73.91h-88.82v73.91h-96V-288h96v230.59H182.91Zm83-83h110.68V-205H265.91v64.59Zm0-307.18h110.68v-64.82H265.91v64.82Zm365.5 0h110.68v-64.82H631.41v64.82ZM265.91-731h110.68v-64.59H265.91V-731Zm55.46-32.41Zm0 283.41Zm365.5 0Zm-365.5 307.41Z" />
  </svg>
);
