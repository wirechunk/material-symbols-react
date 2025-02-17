import type { SVGProps } from "react";
export const SvgWard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-792H96v-72h144v768h-72v-696ZM288-96v-768h480v768H288Zm72-431q18-12 39.29-18.5T444-552h168q23.42 0 44.71 6.5T696-527v-265H360v265Zm167.79-71Q498-598 477-619.21t-21-51Q456-700 477.21-721t51-21Q558-742 579-720.79t21 51Q600-640 578.79-619t-51 21ZM360-168h336v-228q0-34.65-24.67-59.33Q646.65-480 612-480H444q-34.65 0-59.33 24.67Q360-430.65 360-396v228Zm132-48h72v-72h72v-72h-72v-72h-72v72h-72v72h72v72Zm-132 48h336-336Z" />
  </svg>
);
