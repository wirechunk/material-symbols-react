import type { SVGProps } from "react";
export const SvgAllOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M184-184v-132h32v100h100v32H184Zm460 0v-32h100v-100h32v132H644Zm-164-96q-83.85 0-141.92-58.08Q280-396.15 280-480t58.08-141.92Q396.15-680 480-680t141.92 58.08Q680-563.85 680-480t-58.08 141.92Q563.85-280 480-280Zm.2-32q69.8 0 118.8-49.2t49-119q0-69.8-49.2-118.8t-119-49Q410-648 361-598.8t-49 119q0 69.8 49.2 118.8t119 49ZM184-644v-132h132v32H216v100h-32Zm560 0v-100H644v-32h132v132h-32ZM480-480Z" />
  </svg>
);
