import type { SVGProps } from "react";
export const SvgIdentityAwareProxy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M130-140.77v-45.38h700v45.38H130Zm0-633.08v-45.38h700v45.38H130Zm0 163.47v-56.16h56.15v56.16H130Zm643.85 0v-56.16H830v56.16h-56.15ZM130-293.85V-350h56.15v56.15H130Zm643.85 0V-350H830v56.15h-56.15Zm-436.54 0v-163.46H130v-45.38h207.31v-163.85h285.38v163.85H830v45.38H622.69v163.46H337.31Z" />
  </svg>
);
