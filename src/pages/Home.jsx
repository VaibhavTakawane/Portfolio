import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Download,
} from "lucide-react";

import {
  profile,
  skills,
} from "../data/content";

import PageNavigation from "../components/PageNavigation";

export default function Home() {
  const line = `const developer = "${profile.name}";`;

  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;

    const id = setInterval(() => {
      i += 1;

      setTyped(
        line.slice(0, i)
      );

      if (i >= line.length) {
        clearInterval(id);
      }
    }, 35);

    return () =>
      clearInterval(id);
  }, [line]);

  return (
    <div className="page-container">
      <p className="mb-4 font-mono text-base font-medium text-amber sm:text-lg">
        {typed}

        {typed.length < line.length && (
          <span className="caret" />
        )}
      </p>

      <h1 className="page-title max-w-5xl">
        {profile.role}
      </h1>

      <p className="page-subtitle max-w-4xl">
        {profile.tagline}
      </p>

      <p className="page-lead mt-8">
        I build practical, polished web applications
        from the interface to the backend, with a focus
        on clean architecture, reliable APIs, and a great
        user experience.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <Link
          to="/projects"
          className="button-primary"
        >
          View projects
          <ArrowUpRight size={18} />
        </Link>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="button-secondary"
        >
          Download resume
          <Download size={18} />
        </a>
      </div>

      <div className="mt-16">
        <p className="section-label mb-4">
          // technologies I work with
        </p>

        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="tag"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <PageNavigation
        next="/about"
        nextLabel="About Me"
      />
    </div>
  );
}