import dynamic from "next/dynamic";
import AboutMe from "./about-me";
import Landing from "./landing";
import MyExperiences from "./my-experiences";
import MyProjects from "./my-projects";
import MySocials from "./my-socials";

const MatrixRain = dynamic(() => import("./components/MatrixRain"), { ssr: false });

export default function Home() {
  return (
    <>
      <MatrixRain />
      <Landing />
      <AboutMe />
      <MyExperiences />
      <MyProjects />
      <MySocials />
    </>
  );
}
