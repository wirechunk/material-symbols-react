import type { SVGProps } from "react";
export const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m240-240-82.88 82.88Q140-140 118-149.41q-22-9.4-22-33.59v-609q0-29.7 21.15-50.85Q138.3-864 168-864h624q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H240Zm-30-72h582v-480H168v522l42-42Zm-42 0v-480 480Z" />
  </svg>
);
