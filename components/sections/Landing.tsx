import Image from "next/image";
import logo from "../../app/img/logo.png";

export default function Landing() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col gap-3">
      <div className="border-white border-[1px] rounded-lg py-10 px-14 flex flex-row items-center gap-20">
        <div>
          <p>Hello! My name is</p>
          <h1 className="text-7xl">SECONA</h1>
        </div>
        <Image src={logo} color="white" alt="logo" height={129} width={73} />
      </div>
    </div>
  )
}
