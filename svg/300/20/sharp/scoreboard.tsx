import type { SVGProps } from "react";
export const SvgScoreboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M573.69-390.15v-179.7h131.69v179.7H573.69Zm35.69-35.7h60.31v-108.3h-60.31v108.3Zm-354.76 35.7v-111.54h96v-32.46h-96v-35.7h131.69v111.54h-96v32.46h96v35.7H254.62Zm207.53-132.54v-35.69h35.7v35.69h-35.7Zm0 123.38V-435h35.7v35.69h-35.7ZM115.23-216.23v-525.23H298v-72h52v72h260v-72h52v72h182.77v525.23H115.23Zm52-52h294.92v-43.39h35.7v43.39h294.92v-421.23H497.85v43.38h-35.7v-43.38H167.23v421.23Zm0 0v-421.23 421.23Z" />
  </svg>
);
