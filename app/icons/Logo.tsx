import * as React from "react";
import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 522 917"
    {...props}
  >
    <path fill="#fff" d="M419.5 0 0 244l102.5 62.5 419-246z" />
    <path
      fill="#fff"
      d="M102.5 306.5 0 244v361.5L102.5 668zM209 365v121.5l312.5-184L418.25 242zM419.5 482.5 102.5 668 0 735l102.5 56.5 317-186z"
    />
    <path fill="#fff" d="M102.5 916.5v-125L0 735v115z" />
  </svg>
);
export default SvgLogo;
