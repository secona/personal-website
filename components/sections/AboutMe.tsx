import SvgElementB from "../icons/ElementB";

export default function AboutMe() {
  return (
    <div className="mx-12 min-h-screen grid place-items-center">
      <div className="max-w-5xl flex flex-row items-center justify-center gap-20 min-h-screen">
        <div className="flex-grow">
          <h1 className="uppercase text-5xl">About Me</h1>
          <br />
          <p>
            I am a Web Developer and a dedicated student at University of Indonesia,
            majoring in Computer Science. I have been passionate about the world of
            Web Development since I was in junior high school. Fast forward a few
            years, I have multiple personal projects in Web Development and other
            areas of software engineering.
          </p>
          <br />
          <p>
            Fueled by curiosity and passion, I am eager to learn more about the
            world of Computer Science and Web Development. I am open to new
            challenges and new experiences, whether it is Web Development or other
            fields of Computer Science. Every opportunity is a chance for me to
            learn, improve my skills, becoming a better person, and make
            contributions to the world.
          </p>
        </div>
        <div>
          <SvgElementB height={300}/>
        </div>
      </div>
    </div>
  );
}
