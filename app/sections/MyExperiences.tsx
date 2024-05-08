import Image from "next/image";
import Experience from "../components/Experience";
import element1 from "../img/element-1.png";

export default function MyExperiences() {
  return (
    <div className="mx-12 min-h-screen grid place-items-center">
      <div className="flex flex-row justify-center gap-32">
        <div className="grid place-items-center max-h-screen sticky top-0">
          <Image src={element1} alt="" height={500} />
        </div>
        <div className="max-w-2xl">
          <h1 className="uppercase text-5xl">My Experiences</h1>
          <br />
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
    </div>
  )
}
