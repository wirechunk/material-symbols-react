import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M313.78-33.78v-60h332.44v60H313.78Zm-20.78-120q-32.51 0-55.86-23.36-23.36-23.35-23.36-55.86v-614q0-32.51 23.36-55.86 23.35-23.36 55.86-23.36h374q32.51 0 55.86 23.36 23.36 23.35 23.36 55.86v614q0 32.51-23.36 55.86-23.35 23.36-55.86 23.36H293ZM293-293v60h374v-60H293Zm0-60h374v-374H293v374Zm0-434h374v-60H293v60Zm0 0v-60 60Zm0 494v60-60Z" />
  </svg>
);
