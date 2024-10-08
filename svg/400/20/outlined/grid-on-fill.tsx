import type { SVGProps } from "react";
export const SvgGridOnFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-144h104v-176H144v104q0 29.7 21.15 50.85Q186.3-144 216-144Zm176 0h176v-176H392v176Zm248 0h104q29.7 0 50.85-21.15Q816-186.3 816-216v-104H640v176ZM144-392h176v-176H144v176Zm248 0h176v-176H392v176Zm248 0h176v-176H640v176ZM144-640h176v-176H216q-29.7 0-50.85 21.15Q144-773.7 144-744v104Zm248 0h176v-176H392v176Zm248 0h176v-104q0-29.7-21.15-50.85Q773.7-816 744-816H640v176Z" />
  </svg>
);
