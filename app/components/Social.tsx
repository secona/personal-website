import React from "react"

export interface SocialProps {
  icon: React.ReactNode;
  handle: string;
  url: string;
}

export default function Social(props: SocialProps) {
  return (
    <div className="flex flex-row items-center gap-5 w-full">
      {props.icon}
      <a
        href={props.url}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:underline hover:text-neon-green"
      >
        {props.handle}
      </a>
    </div>
  )
}
