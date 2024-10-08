import type { SVGProps } from "react";
export const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M172.78-76.78v-726.66h164.61v-79.78h98v79.78h89.22v-79.78h98v79.78h164.04v726.66H172.78Zm98-98h417.87v-530.65H270.78v530.65Zm60.7-372.96h296.48v-98H331.48v98ZM480.5-257.78q37.5 0 66.5-27.63t29-67.37q0-31-20-56t-76-89q-56 64-76 89t-20 56.01q0 39.74 29.5 67.36 29.5 27.63 67 27.63Zm-209.72 83v-530.65 530.65Z" />
  </svg>
);
