import { GithubOutlined, LinkedinFilled, XOutlined } from "@ant-design/icons";
import Social from "../components/Social";

export default function MySocials() {
  return (
    <div className="mx-12 grid place-items-center">
      <div className="py-10 px-14 w-full max-w-4xl block">
        <h1 className="uppercase text-5xl">My Socials</h1>
        <Social
          icon={<GithubOutlined />}
          handle="@secona"
          url="https://github.com/secona"
        />
        <Social
          icon={<LinkedinFilled />}
          handle="@secona"
          url="https://linkedin.com/in/secona"
        />
        <Social
          icon={<XOutlined />}
          handle="@bahasakarat"
          url="https://x.com/bahasakarat"
        />
      </div>
    </div>
  )
}
