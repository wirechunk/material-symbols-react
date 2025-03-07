import type { SVGProps } from "react";
export const SvgNoFlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M803-56 696-162v66H96v-480h168l9-9L56-803l51-50 746 746-50 51ZM168-168h456v-66l-97-97q-5 50-42.5 82.5T396-216q-54.69 0-93.34-38.66Q264-293.31 264-348q0-49.38 33-85.69Q330-470 379-479l-25-25H168v336Zm228-120q25 0 42.5-17.21T456-347q0-26-17.5-43.5T396-408q-25 0-42.5 17.5T336-348q0 25 17.5 42.5T396-288Zm300-78-72-72v-66h-66L438-624h66l48 48h144v210Zm48-138v-168h-48v-192h168l-72 144h72L744-504Zm-120 66Zm-174 44Z" />
  </svg>
);
