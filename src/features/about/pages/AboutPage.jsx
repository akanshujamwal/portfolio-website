// AboutPage — assembles every about section in order.
// Each section is its own component — this page just composes them.

import AboutHero from "../components/AboutHero";
import MyStory from "../components/MyStory";
import MyValues from "../components/MyValues";
import ExperienceTimeline from "../components/ExperienceTimeline";
import EducationTimeline from "../components/EducationTimeline";
import SkillsFull from "../components/SkillsFull";
import CertificationsFull from "../components/CertificationsFull";
import CurrentlyLearning from "../components/CurrentlyLearning";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MyStory />
      <MyValues />
      <ExperienceTimeline />
      <EducationTimeline />
      <SkillsFull />
      <CertificationsFull />
      <CurrentlyLearning />
    </main>
  );
}