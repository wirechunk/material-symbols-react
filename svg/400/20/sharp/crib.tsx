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
    <path d="M264-384h432v-120H407.78v-192h-72.06Q306-696 285-674.85T264-624v240Zm216 216q18 0 36.5-1.5t35.5-6.05V-312H408v136q18 5 36 6.5t36 1.5Zm.12 72Q403-96 333-125t-124-83l51-51q17 17 36.5 30t39.5 26v-109H192v-312q0-60 42-102t101.58-42H480v192h288v264H624v109q20-12 40-25.5t37-30.5l51 51q-54 54-124.38 83-70.37 29-147.5 29ZM408-504Z" />
  </svg>
);
