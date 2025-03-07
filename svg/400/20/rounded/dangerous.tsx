import type { SVGProps } from "react";
export const SvgDangerous = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M371-144q-14 0-27-5t-24-16L165-321q-10-10-15.5-23.5T144-372v-217q0-14 5-27t16-24l155-155q11-11 24-16t27-5h218q14 0 27 5t24 16l155 155q11 11 16 24t5 27v218q0 14-5 27t-16 24L639-165q-10 10-23.5 15.5T588-144H371Zm0-72h218l155-155v-218L588-744H371L216-589v218l155 155Zm109-213 82 81q11 11 25 11t25-11q11-11 11-25t-11-25l-81-82 81-82q11-11 11-25t-11-25q-11-11-25-11t-25 11l-82 81-82-81q-11-11-25-11t-25 11q-11 11-11 25t11 25l81 82-81 82q-11 11-11 25t11 25q11 11 25 11t25-11l82-81Zm0-51Z" />
  </svg>
);
