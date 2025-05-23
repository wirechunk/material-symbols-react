import type { SVGProps } from "react";
export const SvgPunchClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h40v-120q0-33 23.5-56.5T320-920h320q33 0 56.5 23.5T720-840v120h40q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm120-640h320v-120H320v120ZM200-160h560v-480H200v480Zm280-40q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-60q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm20-148v-72q0-8-6-14t-14-6q-8 0-14 6t-6 14v71q0 8 3 15.5t9 13.5l40 40q6 6 14 6t14-6q6-6 6-14t-6-14l-40-40Zm-20 8Z" />
  </svg>
);
