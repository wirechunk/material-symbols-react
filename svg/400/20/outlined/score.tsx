import type { SVGProps } from "react";
export const SvgScore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-144q-29 0-50.5-21.5T144-216v-528q0-29.7 21.5-50.85Q187-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29-21.15 50.5T744-144H216Zm153-318 147 150 228-228v-204H216v436l153-154Zm111-42v-192h48v192h-48Zm112.32 0L528-600l64.32-96H647l-65 96 65 96h-54.68ZM304-504v-120h80v-24h-80v-48h128v120h-80v24h80v48H304Zm63 140L219-216h525v-225L518-214 367-364ZM216-216v-528 528Z" />
  </svg>
);
