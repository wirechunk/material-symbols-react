import type { SVGProps } from "react";
export const SvgDetectionAndZone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-672v-192h192v72H168v120H96Zm0 576v-192h72v120h120v72H96Zm576 0v-72h120v-120h72v192H672Zm120-576v-120H672v-72h192v192h-72ZM527.75-552q-34.75 0-59.25-24.75t-24.5-59.5q0-34.75 24.75-59.25t59.5-24.5q34.75 0 59.25 24.75t24.5 59.5q0 34.75-24.75 59.25t-59.5 24.5ZM354-240l37-188-79 34v106h-72v-154l158-67q16-7 32-13t33-6q24.32 0 45.16 10.5Q529-507 542-487l34 55q23 38 58 55t86 17v72q-56.88 0-106.44-25.5Q564-339 529-384l-28 144H354Z" />
  </svg>
);
