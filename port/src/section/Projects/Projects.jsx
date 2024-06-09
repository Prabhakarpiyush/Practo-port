import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          //src={viberr}
          link="https://github.com/Prabhakarpiyush/I-Notebook"
          h3="Notebook"
          p="I-Notebook"
        />
        <ProjectCard
          //src={hipsster}
          link="https://github.com/Prabhakarpiyush/Newsapp"
          h3="News-App"
          p="News funky"
        />
        <ProjectCard
          //src={fitLift}
          link="https://github.com/Prabhakarpiyush/P-chat-app"
          h3="Chating"
          p="Chat App"
        />
      </div>
    </section>
  );
}

export default Projects;
