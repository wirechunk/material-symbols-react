import type { SVGProps } from "react";
export const SvgSimulation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-288v-21q0-29 43.5-52T480-384q57 0 100.5 23t43.5 52v21H336Zm144-144q-30 0-51-21t-21-51q0-30 21-51t51-21q30 0 51 21t21 51q0 30-21 51t-51 21ZM144-605v324q17 11 34.5 19.5T216-248v-334q-19-4-37-9.5T144-605Zm672 0q-15 7-33.5 12.5T744-582v334q20-5 37-13t28-13l7-331ZM288-162q-104-13-160-42.5T72-276v-408q0-50 110-79t298-29q188 0 298 29t110 79v408q0 42-56 71.5T672-162v-481q42-7 76-16.5t56-20.5q-43-17-136-28.5T480-720q-95 0-188 11.5T156-680q23 11 58 20.5t74 16.5v481ZM144-605v357-357Zm672 0v357-357Z" />
  </svg>
);
