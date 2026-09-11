import {
  Github,
  ExternalLink,
} from "lucide-react";

import { projects } from "../data/content";
import PageNavigation from "../components/PageNavigation";

export default function Projects() {
  return (
    <div className="page-container">
      <p className="section-label mb-4">
        02 / selected work
      </p>

      <h1 className="page-title">
        Projects
      </h1>

      <p className="page-lead mt-6">
        A selection of projects that show how I approach
        product design, frontend development, APIs,
        automation, and deployment.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="card p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-mono text-base font-semibold text-amber">
                {project.name}
              </h2>

              <div className="flex gap-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Repository"
                    className="icon-button h-9 w-9"
                  >
                    <Github size={17} />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live site"
                    className="icon-button h-9 w-9"
                  >
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-4 text-base leading-7 text-muted">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <PageNavigation
        previous="/about"
        previousLabel="About"
        next="/skills"
        nextLabel="Skills & Tools"
      />
    </div>
  );
}