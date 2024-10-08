import type { SVGProps } from "react";
export const SvgDeck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M447.37-77.37V-600H69l411-289.33L891-600H512.63v522.63h-65.26ZM480-665.5h204.98-409.96H480ZM109-77.37v-213.39L76.52-468.15l63.5-11.2 32 166.72h165.35v235.26h-65.5v-170H174.5v170H109Zm513.63 0v-235.26h165.59l32-166.72 63.26 11.2L851-290.76v213.39h-65.5v-170h-97.13v170h-65.74ZM275.02-665.5h409.96L480-809.63 275.02-665.5Z" />
  </svg>
);
