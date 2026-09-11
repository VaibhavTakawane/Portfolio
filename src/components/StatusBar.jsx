import { useEffect, useState } from "react";

import {
  Search,
  Command,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Github,
  ExternalLink,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/content";

export default function StatusBar({
  onOpenPalette,
  musicOn,
  musicError,
  onToggleMusic,
}) {
  const { theme, toggleTheme } = useTheme();

  const [time, setTime] = useState(new Date());
  const [search, setSearch] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);
    onOpenPalette?.(value);
  };

  return (
    <nav className="sticky top-0 z-20 h-16 border-b border-border bg-panel/90 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6">

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="/"
            className="text-base font-semibold tracking-tight transition-colors hover:text-amber"
          >
            Home
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-text"
          >
            LinkedIn
            <ExternalLink size={13} />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-text"
          >
            Resume
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">

          {/* Search */}
          <div className="hidden h-10 w-[280px] items-center rounded-xl border border-border bg-panel-2 px-3 transition-colors focus-within:border-amber/70 sm:flex">
            <Search
              size={16}
              className="mr-2 text-muted"
            />

            <input
              type="text"
              value={search}
              onChange={handleSearch}
              onFocus={() => onOpenPalette?.()}
              placeholder="Search sections..."
              className="w-full bg-transparent text-sm text-text outline-none placeholder:text-muted"
            />

            <div className="flex items-center gap-1 rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
              <Command size={10} />
              K
            </div>
          </div>

          {/* Time */}
          <div className="hidden items-center gap-2 rounded-full border border-border bg-panel-2 px-3 py-2 lg:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="font-mono text-xs font-medium tabular-nums text-text">
              {time.toLocaleTimeString()}
            </span>
          </div>

          {/* MUSIC */}
          <button
            onClick={onToggleMusic}
            className={`icon-button relative ${musicOn
                ? "border border-amber/40 bg-amber/10 text-amber"
                : ""
              }`}
            aria-label={
              musicOn
                ? "Pause music"
                : "Play music"
            }
            title={
              musicError
                ? "Music could not be played"
                : musicOn
                  ? "Pause music"
                  : "Play music"
            }
          >
            {musicOn ? (
              <>
                <Volume2
                  size={19}
                  className="animate-pulse"
                />

                {/* Playing indicator */}
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-amber shadow-[0_0_10px_var(--amber)]" />
              </>
            ) : (
              <VolumeX size={19} />
            )}
          </button>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="icon-button"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={19} />
          </a>
        </div>
      </div>
    </nav>
  );
}