import SvgLogo from "./icons/Logo";

export default function Landing() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col px-10">
      <div className="z-10 bg-black border-white border-[1px] rounded-lg py-10 px-14 flex flex-row items-center gap-20">
        <div>
          <p>Hello! My name is</p>
          <h1 className="text-7xl">SECONA</h1>
          <h6 className="text-neon-green">Web Developer</h6>
        </div>
        <SvgLogo height={175} />
      </div>
    </div>
  );
}
