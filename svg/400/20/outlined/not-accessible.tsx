import type { SVGProps } from "react";
export const SvgNotAccessible = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M768-90 570-288h-66q-30 0-51-21t-21-51v-66L90-768l51-51 678 678-51 51Zm-384-6q-80 0-136-56t-56-136q0-80 56-136t136-56v72q-50 0-85 35t-35 85q0 50 35 85t85 35q37 0 66.5-20t43.5-52h75q-17 63-67.5 103.5T384-96Zm120-588q-35 0-59.5-24.5T420-768q0-35 24.5-59.5T504-852q35 0 59.5 24.5T588-768q0 35-24.5 59.5T504-684Zm264 252q-54 0-103-17.5T576-499L451-624q11-12 25.5-18.5T507-649q14 0 27 5.5t23 19.5l19 26q20 28 68 61t124 33v72Z" />
  </svg>
);
