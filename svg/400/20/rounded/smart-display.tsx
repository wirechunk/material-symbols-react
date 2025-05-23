import type { SVGProps } from "react";
export const SvgSmartDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m412-330 212-135q8-5.36 8-15.18T624-495L412-630q-9-6-18.5-.75T384-615v269.68q0 11.32 9.5 16.32t18.5-1ZM168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm0-72h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
