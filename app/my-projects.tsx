import Project from "./components/Project";

export default function MyProjects() {
  return (
    <div className="mx-8 lg:mx-16 min-h-[50vh] flex flex-col items-center">
      <div className="max-w-5xl flex flex-col gap-5 justify-center">
        <h1 className="uppercase text-5xl text-center">My Projects</h1>
        <div className="flex flex-row flex-wrap gap-2 justify-center">
          <Project
            title="Belalang Language"
            description="🦗 Belalang is a simple interpreted language written in The Rust Programming Language. [WIP]"
            githubLink="https://github.com/secona/belalang"
            outLink="https://belalang.secona.dev"
          />
        </div>
      </div>
    </div>
  );
}
