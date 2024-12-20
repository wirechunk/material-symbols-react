import type { SVGProps } from "react";
export const SvgLockClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-624h240v-96q0-50-35-85t-85-35q-50 0-85 35t-35 85v96Zm91 528H192v-528h96v-96q0-79.68 56.23-135.84 56.22-56.16 136-56.16Q560-912 616-855.84q56 56.16 56 135.84v96h96v139q-17-7-35.5-11.5T696-503v-49H264v384h154q6 20 14 38t19 34Zm220.77 48Q592-48 536-104.23q-56-56.22-56-136Q480-320 536.23-376q56.22-56 136-56Q752-432 808-375.77q56 56.22 56 136Q864-160 807.77-104q-56.22 56-136 56ZM727-151l34-34-65-65v-86h-48v106l79 79ZM264-552v384-384Z" />
  </svg>
);
