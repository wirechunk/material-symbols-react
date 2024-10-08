import type { SVGProps } from "react";
export const SvgVrpano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-272q76-23 155-31.5t157-8.5q78 0 157 8.5T792-272v-416q-76 23-155 31.5T480-648q-78 0-157-8.5T168-688v416ZM96-168v-624q90 42 187 57t197 15q100 0 197-15t187-57v624q-90-42-187-57t-197-15q-100 0-197 15T96-168Zm384-312ZM240-363q60-10 120-15.5t120-5.5q60 0 120 5.5T720-363L552-552 433-419l-73-85-120 141Z" />
  </svg>
);
