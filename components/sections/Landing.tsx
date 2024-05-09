import SvgLogo from "../icons/Logo";

export default function Landing() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col gap-3">
      <div className="border-white border-[1px] rounded-lg py-10 px-14 flex flex-row items-center gap-20">
        <div>
          <p>Hello! My name is</p>
          <h1 className="text-7xl">SECONA</h1>
        </div>
        <SvgLogo height={175} />
      </div>
    </div>
  )
}
