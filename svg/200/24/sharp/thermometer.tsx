import type { SVGProps } from "react";
export const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-160q-66.85 0-113.42-46.58Q320-253.15 320-320q0-43.38 21.77-79.5T400-458.46V-720q0-33.85 23.08-56.92Q446.15-800 480-800t56.92 23.08Q560-753.85 560-720v261.54q36.46 22.84 57.85 58.96Q639.23-363.38 640-320q-.77 66.85-47.35 113.42Q546.08-160 480-160Zm0-40q50 0 85-35t35-85q0-29-12.5-54T552-416l-32-24v-280q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v280l-32 24q-23 17-35.5 42T360-320q0 50 35 85t85 35Zm0-120Z" />
  </svg>
);
