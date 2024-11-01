import type { SVGProps } from "react";
export const SvgFlipFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M389.78-135.87H218.87q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-522.26q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h170.91v83H218.87v522.26h170.91v83Zm49.44 95.28v-878.82h83v878.82h-83Zm151.43-95.28v-83h82.28v83h-82.28Zm0-605.26v-83h82.28v83h-82.28Zm150.48 605.26v-83h83q0 34.78-24.26 58.89t-58.74 24.11Zm0-151.43v-83h83v83h-83Zm0-151.2v-83h83v83h-83Zm0-151.43v-83h83v83h-83Zm0-151.2v-83q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74h-83Z" />
  </svg>
);
