import AboutMe from "./about-me";
import Landing from "./landing";
import MyExperiences from "./my-experiences";
import MyProjects from "./my-projects";
import MySocials from "./my-socials";

export default function Home() {
  return (
    <>
      <Landing />
      <AboutMe />
      <MyExperiences />
      <MyProjects />
      <MySocials />
    </>
  );
}
