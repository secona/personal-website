import { GithubOutlined, LinkedinFilled, TwitterOutlined } from "@ant-design/icons"
import Link from "next/link";
import Image from "next/image";
import logo from "../img/logo.png";

function ButtonLink(props: { href: string, children: React.ReactNode }) {
  return (
    <Link href={props.href}>
      <button className="border-white border-[1px] rounded-lg grid place-items-center p-2">
        {props.children}
      </button>
    </Link>
  )
}

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
      <div className="flex flex-row gap-3">
        <ButtonLink href="https://github.com/secona">
          <GithubOutlined className="text-2xl" />
        </ButtonLink>
        <ButtonLink href="https://linkedin.com/in/secona">
          <LinkedinFilled className="text-2xl" />
        </ButtonLink>
        <ButtonLink href="https://twitter.com/bahasakarat">
          <TwitterOutlined className="text-2xl" />
        </ButtonLink>
      </div>
    </div>
  )
}
