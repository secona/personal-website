export interface ExperienceProps {
  title: string;
  at: string;
  startTime: string;
  endTime: string;
  description: string[];
}

export default function Experience(props: ExperienceProps) {
  return (
    <li className="mb-5">
      <span className="text-sm italic text-gray-500">{props.startTime} - {props.endTime}</span>
      <h1 className="text-lg">
        <span className="text-neon-green">{props.title}</span> — {props.at}
      </h1>
      <ul className="list-disc list-inside">
        {props.description.map((des, i) => <li key={i}>{des}</li>)}
      </ul>
    </li>
  )
}
