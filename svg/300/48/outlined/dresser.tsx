import type { SVGProps } from "react";
export const SvgDresser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M180-130v-632.31q0-23.5 17.1-40.59 17.09-17.1 40.59-17.1h484.62q23.5 0 40.59 17.1 17.1 17.09 17.1 40.59V-130h-45.39v-84.62H225.39V-130H180Zm45.39-375.38h231.92v-269.23H237.69q-5.38 0-8.84 3.46t-3.46 8.84v256.93Zm277.3-157.31h231.92v-99.62q0-5.38-3.46-8.84t-8.84-3.46H502.69v111.92Zm0 157.31h231.92v-111.93H502.69v111.93Zm-85.38 168.07h125.38v-45.38H417.31v45.38ZM225.39-460v200h509.22v-200H225.39Zm0 0v200-200Z" />
  </svg>
);
