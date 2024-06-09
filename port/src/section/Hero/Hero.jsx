import styles from './HeroStyle.module.css';
//import heroImg from '../../assets/Design uten navn.png';
import heroimg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const GithubIcon = theme === 'light' ? githubLight : githubDark;
  const LinkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroimg}
          className={styles.hero}
          alt="profile picture of piyush  "
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Piyush <br /> Prabhakar
        </h1>
        <h2>FullStack Developer || Problem Solver </h2>
        <span>
          <a href="https://twitter.com/" target=" _blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://Linkedin.com/" target=" _blank">
            <img src={LinkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://Github.com/" target=" _blank">
            <img src={GithubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          Currently i am prefinal student With a passion for developing the
          project over the technology and the learning the new tech stuffs in my
          day to day.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
