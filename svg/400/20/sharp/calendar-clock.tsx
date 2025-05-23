import type { SVGProps } from "react";
export const SvgCalendarClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-600h528v-96H216v96Zm0 0v-96 96ZM144-96v-672h144v-96h72v96h240v-96h72v96h144v282q-17-7-35.03-11-18.04-4-36.97-6v-25H216v360h250q5 20 13.5 37.5T499-96H144Zm575.77 48Q640-48 584-104.23q-56-56.22-56-136Q528-320 584.23-376q56.22-56 136-56Q800-432 856-375.77q56 56.22 56 136Q912-160 855.77-104q-56.22 56-136 56ZM775-151l34-34-65-65v-86h-48v106l79 79Z" />
  </svg>
);
