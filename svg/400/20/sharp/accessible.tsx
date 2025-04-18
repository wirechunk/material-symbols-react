import type { SVGProps } from "react";
export const SvgAccessible = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M503.75-696q-34.75 0-59.25-24.75t-24.5-59.5q0-34.75 24.75-59.25t59.5-24.5q34.75 0 59.25 24.75t24.5 59.5q0 34.75-24.75 59.25t-59.5 24.5ZM696-108v-192H432v-288q0-29 20.56-50.5Q473.13-660 502-660q23 0 37 9.5t26 25.5q38 51 88 80t115 29v72q-52 0-98.5-16T576-511v126.97h192V-108h-72Zm-312 0q-79.68 0-135.84-56.16T192-300q0-80 56-136t136-56v72q-50 0-85 35t-35 85q0 50 35 85t85 35q35 0 65-20t45-52h75q-17 64-67.77 104-50.77 40-117.23 40Z" />
  </svg>
);
