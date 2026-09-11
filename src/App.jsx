import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import TabBar from "./components/TabBar";
import StatusBar from "./components/StatusBar";
import CommandPalette from "./components/CommandPalette";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SkillsSection from "./pages/SkillsSection";
import Education from "./pages/Education";

import Footer from "./components/Footer";

function RouteScroll({ mainRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    mainRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, mainRef]);

  return null;
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const audioRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };

    window.addEventListener("keydown", handler);

    return () =>
      window.removeEventListener("keydown", handler);
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
      return;
    }

    try {
      await audio.play();
      setMusicOn(true);
    } catch {
      setMusicOn(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-bg text-text">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <StatusBar
          onOpenPalette={() => setPaletteOpen(true)}
          musicOn={musicOn}
          onToggleMusic={toggleMusic}
        />

        <TabBar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() =>
            setSidebarOpen((open) => !open)
          }
        />

        <main
          ref={mainRef}
          className="page-scroll flex-1 overflow-y-auto"
        >
          <RouteScroll mainRef={mainRef} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/education" element={<Education />} />
          </Routes>

          <Footer/>
        </main>
      </div>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onToggleMusic={toggleMusic}
      />

      <audio
        ref={audioRef}
        loop
        preload="metadata"
        src="/music/theme.mp3"
      />
    </div>
  );
}