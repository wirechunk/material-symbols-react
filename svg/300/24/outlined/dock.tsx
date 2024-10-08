import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M330-72.31v-60h300v60H330Zm2.31-140q-30.31 0-51.31-21-21-21-21-51.31V-820q0-30.31 21-51.31 21-21 51.31-21h295.38q30.31 0 51.31 21 21 21 21 51.31v535.38q0 30.31-21 51.31-21 21-51.31 21H332.31Zm-12.31-110v37.69q0 4.62 3.85 8.47 3.84 3.84 8.46 3.84h295.38q4.62 0 8.46-3.84Q640-280 640-284.62v-37.69H320Zm0-60h320v-340H320v340Zm0-400h320V-820q0-4.61-3.85-8.46-3.84-3.85-8.46-3.85H332.31q-4.62 0-8.46 3.85Q320-824.61 320-820v37.69Zm0 0v-50 50Zm0 460v50-50Z" />
  </svg>
);
