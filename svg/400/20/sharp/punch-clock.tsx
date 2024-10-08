import type { SVGProps } from "react";
export const SvgPunchClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-96v-624h96v-192h480v192h96v624H144Zm168-624h336v-120H312v120Zm-96 552h528v-480H216v480Zm264.23-48Q560-216 616-272.23q56-56.22 56-136Q672-488 615.77-544q-56.22-56-136-56Q400-600 344-543.77q-56 56.22-56 136Q288-328 344.23-272q56.22 56 136 56Zm-.47-48Q420-264 378-306.24q-42-42.24-42-102T378.24-510q42.24-42 102-42T582-509.76q42 42.24 42 102T581.76-306q-42.24 42-102 42ZM535-319l34-34-65-65v-86h-48v106l79 79Zm-55-89Z" />
  </svg>
);
