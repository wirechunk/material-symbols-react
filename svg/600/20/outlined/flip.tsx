import type { SVGProps } from "react";
export const SvgFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M396.3-124.78H222.78q-41 0-69.5-28.5t-28.5-69.5v-514.44q0-41 28.5-69.5t69.5-28.5H396.3v98H222.78v514.44H396.3v98Zm36.4 94.3v-899.04h98v899.04h-98Zm153.39-94.3v-98h96.3v98h-96.3Zm0-612.44v-98h96.3v98h-96.3Zm151.13 612.44v-98h98q0 41.3-28.5 69.65-28.5 28.35-69.5 28.35Zm0-153.39v-98h98v98h-98Zm0-152.83v-98h98v98h-98Zm0-153.39v-98h98v98h-98Zm0-152.83v-98q41 0 69.5 28.5t28.5 69.5h-98Z" />
  </svg>
);
