import type { NextPage } from 'next';
import { useRef } from 'react';
import useTheme from '../hooks/theme';

import Navbar from '../layouts/navbar';
import Home from '../layouts/home';
import About from '../layouts/about';
import Project from '../layouts/projects';
import Contact from '../layouts/contact';
import Footer from '../layouts/footer';

import AnimatedCard from '../components/animatedCard';
import AnimateMaskTheme from '../components/animateMaskTheme';

const App: NextPage = () => {
  const { ThemeProvider, initial } = useTheme();
  const AHSectionRef = useRef<any>();
  return (
    <ThemeProvider value={initial}>
      <div className="relative">
        <Navbar />
        <div className="grid-wrap mt-[200px] wrapper relative" ref={AHSectionRef}>
          <AnimatedCard scrollRef={AHSectionRef} />
          <div className="col-span-8">
            <Home />
            <About />
          </div>
        </div>
        <Project />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
