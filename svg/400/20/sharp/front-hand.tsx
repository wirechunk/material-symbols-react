import type { SVGProps } from "react";
export const SvgFrontHand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-480v-432h72v432h-72Zm-144 0v-384h72v384h-72ZM504.22-48Q374-48 283-138.85 192-229.69 192-360v-408h72v408q0 100 70 170t170 70q100 0 170-70t70-170v-144q-20 0-34 13.8T696-456v156H564q-34.65 0-59.33 24.67Q480-250.65 480-216v24h-72v-24q0-65 45.5-110.5T564-372h60v-444h72v250q11-5 23.5-7.5T744-576h72v216q0 130.31-90.78 221.15Q634.43-48 504.22-48ZM540-348Z" />
  </svg>
);
