import type { SVGProps } from "react";
export const SvgDynamicForm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M172.52-516q-40.72 0-69.36-28.79T74.52-614v-82q0-39.73 28.79-68.86Q132.1-794 172.52-794h350.96v278H172.52Zm-9.04-89.52h271.04v-98.96H163.48v98.96ZM172.52-166q-40.42 0-69.21-28.79Q74.52-223.57 74.52-264v-82q0-39.72 28.79-68.86T172.52-444h422.96v278H172.52Zm-9.04-89.52h343.04v-98.96H163.48v98.96Zm504 89.52v-350h-72v-278h287.74l-69 203.52h70.13L667.48-166ZM183.52-281h48v-48h-48v48Zm0-350h48v-48h-48v48Zm-20.04 25.48v-98.96 98.96Zm0 350v-98.96 98.96Z" />
  </svg>
);
