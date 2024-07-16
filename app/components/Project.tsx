import { ExportOutlined, GithubOutlined } from "@ant-design/icons";

export interface ProjectProps {
  title: string;
  description: string;
  githubLink?: string;
  outLink?: string;
}

export default function Project(props: ProjectProps) {
  return (
    <div className="bg-black border-white border-[1px] rounded-lg py-4 px-6 w-96 h-48 flex flex-col justify-between">
      <h3 className="text-2xl">{props.title}</h3>
      <p>{props.description}</p>
      <div className="flex flex-row gap-2 justify-end">
        {props.githubLink && (
          <a
            href={props.githubLink}
            rel="noopener noreferrer"
            target="_blank"
            className="hover:underline hover:text-neon-green"
          >
            <GithubOutlined />
          </a>
        )}
        {props.outLink && (
          <a
            href={props.outLink}
            rel="noopener noreferrer"
            target="_blank"
            className="hover:underline hover:text-neon-green"
          >
            <ExportOutlined />
          </a>
        )}
      </div>
    </div>
  );
}
