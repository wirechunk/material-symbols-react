import type { SVGProps } from "react";
export const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-174q-44.3 0-75.15-30.85Q54-235.7 54-280v-400q0-44.3 30.85-75.15Q115.7-786 160-786h640q44.3 0 75.15 30.85Q906-724.3 906-680v400q0 44.3-30.85 75.15Q844.3-174 800-174H160Zm0-106h640v-400H160v400Zm160-40h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-280v-400 400Z" />
  </svg>
);
