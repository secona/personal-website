import Experience from "../components/Experience";

export default function MyExperiences() {
  return (
    <div className="mx-12 grid place-items-center">
      <div className="py-10 px-14 max-w-4xl">
        <h1 className="uppercase text-5xl">My Experiences</h1>
        <ul>
          <Experience
            title="IT Development Staff"
            at="Open House Fasilkom UI 2023"
            startTime="Aug 2023"
            endTime="Nov 2023"
            description={[
              "Work in a team to develop the Open House Fasilkom UI 2023 website using Next.js, TailwindCSS, and TypeScript."
            ]}
          />
          <Experience
            title="Web Development Staff"
            at="Pesta Rakyat Komputer 2024"
            startTime="Dec 2023"
            endTime="Present"
            description={[
              "Work in a team to develop the PERAK website using Next.js, TailwindCSS, and TypeScript."
            ]}
          />
          <Experience
            title="Software Engineering Academy Expert Staff"
            at="COMPFEST 16"
            startTime="Feb 2024"
            endTime="Present"
            description={[
              "Help PIC and VPIC run the Academy.",
              "Write the selection task for participants.",
            ]}
          />
        </ul>
      </div>
    </div>
  )
}
