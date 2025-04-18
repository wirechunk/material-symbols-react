import type { SVGProps } from "react";
export const SvgFlipFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M352.08-160H215.75q-22.81 0-39.28-16.57Q160-193.13 160-215.38v-529.24q0-22.25 16.57-38.81Q193.13-800 215.38-800h136.7v30.77h-136.7q-10.76 0-17.69 6.92-6.92 6.93-6.92 17.69v529.24q0 10.76 6.92 17.69 6.93 6.92 17.69 6.92h136.7V-160ZM465.85-40v-864.62h30.77V-40h-30.77Zm144.53-120v-40h40v40h-40Zm0-600v-40h40v40h-40ZM760-160v-40h40q0 16.54-12.05 28.27T760-160Zm0-150.38v-40h40v40h-40ZM760-460v-40h40v40h-40Zm0-150.38v-40h40v40h-40ZM760-760v-40q15.9 0 27.95 12.05Q800-775.9 800-760h-40Z" />
  </svg>
);
