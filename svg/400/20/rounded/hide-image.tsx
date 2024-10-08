import type { SVGProps } from "react";
export const SvgHideImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M816-744v420q0 18-11.25 27T780-288q-13.5 0-24.75-9.22T744-324v-420H324q-18 0-27-11.25T288-780q0-13.5 9-24.75T324-816h420q29 0 50.5 21.5T816-744ZM216-144q-29 0-50.5-21.5T144-216v-498l-29-29q-11-11-11-25.5t11-25.5q11-11 25.5-11t25.5 11l628 628q11 11 11 25t-11 25q-11 11-25.5 11T743-116l-29-28H216Zm354-144H300.28Q289-288 284-298q-5-10 2.18-18.97L358-413q5.25-8 14-8t14 8l58 77 34-45-262-261v426h426l-72-72Zm-42-240ZM426-426Z" />
  </svg>
);
