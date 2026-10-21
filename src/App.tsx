import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import ProjectModal from './components/ProjectModal';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Intro from './components/Intro';
import Work from './sections/Work';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import type { Project } from './types';

export default function App() {
  const [modal, setModal] = useState<{ list: Project[]; index: number } | null>(null);

  // A link to /#section arrives before the sections exist, so the browser can't jump; do it once mounted.
  // (Reloads clear the hash in main.tsx and start from the top.)
  useEffect(() => {
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant' });
  }, []);

  const openProject = (project: Project, list: Project[]) => {
    setModal({ list, index: Math.max(0, list.findIndex((p) => p.id === project.id)) });
  };
  const step = (delta: number) =>
    setModal((m) => (m ? { ...m, index: (m.index + delta + m.list.length) % m.list.length } : m));

  const current = modal ? modal.list[modal.index] : null;
  const neighbour = (delta: number) =>
    modal ? modal.list[(modal.index + delta + modal.list.length) % modal.list.length].title : '';

  return (
    <MotionConfig reducedMotion="user">
      <Intro />
      <Nav />
      <main id="main">
        <Hero />
        <Story />
        <Work onOpen={openProject} />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {current && (
          <ProjectModal
            key="project-modal"
            project={current}
            onClose={() => setModal(null)}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
            prevTitle={neighbour(-1)}
            nextTitle={neighbour(1)}
          />
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
