import type { SVGProps } from "react";
export const SvgExperiment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-184q-19.54 0-28.81-17.81t2.58-33.57L400-490.15V-744h-51.17q-6.71 0-11.46-4.55-4.75-4.54-4.75-11.27 0-6.72 4.6-11.45 4.6-4.73 11.4-4.73h262.76q6.8 0 11.4 4.55 4.6 4.54 4.6 11.27 0 6.72-4.6 11.45-4.6 4.73-11.4 4.73H560v253.85L770.25-235.6q12.83 15.98 3.56 33.79T744-184H216Zm102-80h324L518-416h-76L318-264Zm-102 48h528L528-480v-264h-96v264L216-216Zm264-264Z" />
  </svg>
);
