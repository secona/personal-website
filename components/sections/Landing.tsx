import SvgLogo from "../icons/Logo";
import SvgTorus from "../icons/Torus";

export default function Landing() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col gap-3">
      <div className="bg-black border-white border-[1px] rounded-lg py-10 px-14 flex flex-row items-center gap-20">
        <div>
          <p>Hello! My name is</p>
          <h1 className="text-7xl">SECONA</h1>
          <h6 className="text-neon-green">Web Developer</h6>
        </div>
        <SvgLogo height={175} />
      </div>
      <SvgTorus
        className="-z-10 absolute -top-1/2 -right-1/4 rotate-[30deg]"
        height={1000}
      />
    </div>
  )
}
