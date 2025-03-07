import type { SVGProps } from "react";
export const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120v-640h184.62v-80h30.76v80h129.24v-80h30.76v80H760v640H200Zm30.77-30.77h498.46v-578.46H230.77v578.46ZM340-589.23h280V-620H340v30.77Zm139.87 310.38q29.28 0 49.32-20.03 20.04-20.04 20.04-48.05 0-22.3-13.21-38.6-13.22-16.29-56.02-66.39-43.08 50.3-56.15 66.54-13.08 16.24-13.08 38.2 0 28.26 19.91 48.3 19.91 20.03 49.19 20.03Zm-249.1 128.08v-578.46 578.46Z" />
  </svg>
);
