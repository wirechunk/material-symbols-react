import type { SVGProps } from "react";
export const SvgRoundedCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-164v-56.62h56.62V-164H164Zm0-143.85v-56.61h56.62v56.61H164Zm0-143.84v-56.62h56.62v56.62H164Zm0-143.85v-56.61h56.62v56.61H164Zm0-143.84V-796h56.62v56.62H164ZM307.85-164v-56.62h56.61V-164h-56.61Zm0-575.38V-796h56.61v56.62h-56.61ZM451.69-164v-56.62h56.62V-164h-56.62Zm143.85 0v-56.62h56.61V-164h-56.61Zm143.84 0v-56.62H796V-164h-56.62Zm0-143.85v-56.61H796v56.61h-56.62ZM796-447.69h-52v-176.16q0-50.06-35.05-85.1Q673.91-744 623.85-744H451.69v-52h172.16q72.61 0 122.38 49.77Q796-696.46 796-623.85v176.16Z" />
  </svg>
);
