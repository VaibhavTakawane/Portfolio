import {
  experience,
  profile,
} from "../data/content";

import PageNavigation from "../components/PageNavigation";

export default function About() {
  return (
    <div className="page-container">
      <p className="section-label mb-4">
        01 / about
      </p>

      <h1 className="page-title">
        About me
      </h1>

      <p className="page-subtitle">
        More than a title — I enjoy building things that work.
      </p>

      <div className="mt-10 max-w-5xl space-y-6">
        <p className="body-copy">
          I'm{" "}
          <strong className="font-semibold text-text">
            {profile.name}
          </strong>
          , a {profile.role.toLowerCase()} based in{" "}
          {profile.location}. I care about building
          software that's simple to use, easy to maintain,
          and reliable in production.
        </p>

        <p className="body-copy">
          My work spans frontend interfaces, REST APIs,
          databases, deployment, and the tooling that
          connects everything together. I enjoy solving
          real-world problems and turning ideas into useful
          products.
        </p>

        <p className="body-copy">
          Outside of coding, I keep learning, experiment
          with new technologies, and look for better ways
          to automate repetitive work.
        </p>
      </div>

      {/* <div className="mt-16">
        <p className="section-label mb-6">
          // experience
        </p>

        <ol className="relative space-y-7 border-l border-border pl-7">
          {experience.map((item) => (
            <li
              key={item.title}
              className="relative"
            >
              <span className="absolute -left-[34px] top-2 h-3 w-3 rounded-full bg-amber shadow-[0_0_14px_var(--amber)]" />

              <p className="font-mono text-sm text-muted">
                {item.period}
              </p>

              <h2 className="mt-1 text-xl font-bold tracking-tight text-text">
                {item.title}{" "}
                <span className="font-normal text-muted">
                  · {item.org}
                </span>
              </h2>

              <p className="mt-2 max-w-4xl text-base leading-7 text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div> */}

      <PageNavigation
        previous="/"
        previousLabel="Introduction"
        next="/projects"
        nextLabel="Projects"
      />
    </div>
  );
}