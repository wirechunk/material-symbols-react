import type { SVGProps } from "react";
export const SvgJoystick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M444-639v-14q-42-12-69-47t-27-80q0-55 38.5-93.5T480-912q55 0 93.5 38.5T612-780q0 45-27 80t-69 47v14l300 174v186L516-105q-17 10-36 10t-36-10L144-279v-186l300-174ZM216-382v62l264 152 264-152v-62L480-228 216-382Zm264-338q25 0 42.5-17.5T540-780q0-25-17.5-42.5T480-840q-25 0-42.5 17.5T420-780q0 25 17.5 42.5T480-720Zm0 552ZM251-444l229 132 230-132-194-111v147h-72v-147L251-444Z" />
  </svg>
);
