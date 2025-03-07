import type { SVGProps } from "react";
export const SvgCrib = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-384h432v-120H408v-192h-72.21Q306-696 285-674.85T264-624v240Zm216 216q18 0 36.5-1.5t35.5-6.05V-312H408v136q18 5 36 6.5t36 1.5Zm.12 72Q403-96 333-125t-124-83l51-51q17 17 36.5 30t39.5 26v-109h-72.21Q234-312 213-333.15T192-384v-240q0-60 42-102t101.52-42h144.29v192h216.43Q726-576 747-554.85q21 21.15 21 50.85v120q0 29.7-21.15 50.85Q725.7-312 696-312h-72v109q20-12 40-25.5t37-30.5l51 51q-54 54-124.38 83-70.37 29-147.5 29ZM408-504Z" />
  </svg>
);
