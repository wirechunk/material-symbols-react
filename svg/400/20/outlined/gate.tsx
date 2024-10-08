import type { SVGProps } from "react";
export const SvgGate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-288v-384h72v384H96Zm120 72v-384q0-60 42-102t102-42h240q60 0 102 42t42 102v384H216Zm576-72v-384h72v384h-72ZM480-480ZM288-288h156v-156h-60v-72h60v-156h-84q-29.7 0-50.85 21.15Q288-629.7 288-600v312Zm228 0h156v-312q0-29.7-21.15-50.85Q629.7-672 600-672h-84v156h60v72h-60v156Z" />
  </svg>
);
