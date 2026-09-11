import PageNavigation from "../components/PageNavigation";
import { skillCategories } from "../data/content";

export default function SkillsSection() {
    return (
        <div className="page-container">
            <p className="section-label mb-4">
                03 / toolbox
            </p>

            <h1 className="page-title">
                Skills & Tools
            </h1>

            <p className="page-lead mt-6">
                Technologies and tools I use to build scalable
                applications, intelligent systems, modern interfaces,
                APIs, and deployment workflows.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <article
                            key={category.title}
                            className="card p-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="icon-button shrink-0 border border-border bg-panel-2 text-muted">
                                    <Icon size={20} />
                                </div>

                                <div>
                                    <h2 className="text-lg font-bold tracking-tight">
                                        {category.title}
                                    </h2>

                                    <p className="mt-1 text-sm leading-6 text-muted">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="tag"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    );
                })}
            </div>

            <PageNavigation
                previous="/projects"
                previousLabel="Projects"
                next="/education"
                nextLabel="Education"
            />
        </div>
    );
}