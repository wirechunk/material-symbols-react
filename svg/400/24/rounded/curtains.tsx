import type { SVGProps } from "react";
export const SvgCurtains = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40Zm80 0h158q-8-70-46-141.5T240-434v234Zm0-560v234q74-21 112-92.5T398-760H240Zm89 280q68 45 105 123t44 157h4q7-79 44-157t105-123q-68-45-105-123t-44-157h-4q-7 79-44 157T329-480Zm391-280H562q8 70 46 141.5T720-526v-234Zm0 560v-234q-74 21-111.5 92.5T563-200h157ZM240-760v234-234Zm480 0v234-234Zm0 560v-234 234Zm-480 0v-234 234Z" />
  </svg>
);
