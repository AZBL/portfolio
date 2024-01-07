import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SkillSet from "./components/SkillSet";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import projectData from "./assets/data/projectData";
import ProjectIntro from "./components/ProjectIntro";

function App() {
  return (
    <div>
      <Header className="grid" />
      <main className="grid">
        <AboutMe />
        <SkillSet />
        <div className="projectsContainer">
          <ProjectIntro />
          {projectData.map((project) => (
            <Project key={project.id} projectData={project} />
          ))}
        </div>
        <Contact />
      </main>
      <Footer className="grid" />
    </div>
  );
}

export default App;
