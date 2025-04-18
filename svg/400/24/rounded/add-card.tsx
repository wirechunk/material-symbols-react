import type { SVGProps } from "react";
export const SvgAddCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480H160v240h360q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160H160Zm0-480h640v-80H160v80Zm600 440h-80q-17 0-28.5-11.5T640-240q0-17 11.5-28.5T680-280h80v-80q0-17 11.5-28.5T800-400q17 0 28.5 11.5T840-360v80h80q17 0 28.5 11.5T960-240q0 17-11.5 28.5T920-200h-80v80q0 17-11.5 28.5T800-80q-17 0-28.5-11.5T760-120v-80Zm-600-40v-480 480Z" />
  </svg>
);
