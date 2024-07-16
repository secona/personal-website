import SvgElementB from "./icons/ElementB";

export default function AboutMe() {
  return (
    <div className="mx-8 lg:mx-16 min-h-screen grid place-items-center">
      <div className="max-w-5xl flex flex-col md:flex-row items-center md:justify-center gap-10 lg:gap-20 min-h-screen">
        <div>
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
        <div className="flex-shrink">
          <SvgElementB className="h-48 md:h-52 lg:h-72" />
        </div>
      </div>
    </div>
  );
}
