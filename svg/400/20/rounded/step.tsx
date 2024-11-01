import type { SVGProps } from "react";
export const SvgStep = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M744-360q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-330-84H132q-15 0-25.5-10.5T96-480q0-15 10.5-25.5T132-516h282l-80-80q-11-11-10.5-25.5T335-647q11-11 25.5-11t25.5 11l141 142q11 11 11 25t-11 25L385-313q-11 11-25 10.5T335-314q-11-11-11-25.5t11-25.5l79-79Z" />
  </svg>
);
