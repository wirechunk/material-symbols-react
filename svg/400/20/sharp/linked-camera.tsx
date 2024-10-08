import type { SVGProps } from "react";
export const SvgLinkedCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-433Zm336-239q0-80-56-136t-136-56v-48q100 0 170 70t70 170h-48Zm-96 0q0-40-28.2-68T624-768v-48q60 0 101.5 42T768-672h-48ZM96-144v-576h192l72-96h216v72H396l-72 96H168v432h624v-408h72v480H96Zm384-120q72 0 120-49t48-119q0-69-48-118.5T480-600q-72 0-120 49.5t-48 119q0 69.5 48 118.5t120 49Zm0-72q-42 0-69-28.13T384-433q0-39.9 27-67.45Q438-528 480-528t69 27.55q27 27.55 27 67.45 0 40.74-27 68.87Q522-336 480-336Z" />
  </svg>
);
