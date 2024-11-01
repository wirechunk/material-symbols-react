import type { SVGProps } from "react";
export const SvgEnt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M403.85-136h33l19.69-220H580v-32H458.69l13.93-142.77h182.46v-32H444.54L403.85-136ZM304-136v-153.46q-57-48-88.5-110.96Q184-463.37 184-529.56q0-122.68 86.62-208.56Q357.25-824 481-824q92.08 0 169.85 50.81t102.69 130.96L820.46-424H728v192H560v96h-32v-128h168v-192h80l-52-173q-22-72.77-90.27-117.88Q565.46-792 481-792q-111 0-188 76.85-77 76.86-77 186.92 0 58.73 25 111.59 25 52.86 70 90.72L336-304v168h-32Zm192-328Z" />
  </svg>
);
