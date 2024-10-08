import type { SVGProps } from "react";
export const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M439.61-298.46H281.54q-75.34 0-128.44-53.1Q100-404.65 100-479.98q0-75.33 53.1-128.44 53.1-53.12 128.44-53.12h158.07v45.39H281.54q-56.8 0-96.48 39.61-39.67 39.61-39.67 96.3 0 56.7 39.67 96.55 39.68 39.84 96.48 39.84h158.07v45.39ZM333.85-457.31v-45.38h292.69v45.38H333.85Zm186.54 158.85v-45.39h158.07q56.8 0 96.48-39.61 39.67-39.61 39.67-96.3 0-56.7-39.67-96.55-39.68-39.84-96.48-39.84H520.39v-45.39h158.07q75.34 0 128.44 53.1Q860-555.35 860-480.02q0 75.33-53.1 128.44-53.1 53.12-128.44 53.12H520.39Z" />
  </svg>
);
