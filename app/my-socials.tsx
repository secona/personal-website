import { GithubOutlined, LinkedinFilled, XOutlined } from "@ant-design/icons";
import Social from "./components/Social";

export default function MySocials() {
  return (
    <div className="mx-8 lg:mx-16 flex flex-col items-center">
      <div className="py-10 max-w-4xl block">
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
