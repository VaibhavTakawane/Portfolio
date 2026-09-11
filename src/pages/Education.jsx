import {
    GraduationCap,
    CalendarDays,
    MapPin,
    ArrowUpRight,
} from "lucide-react";

import { education } from "../data/content";
import PageNavigation from "../components/PageNavigation";

export default function Education() {
    return (
        <div className="page-container">
            <p className="section-label mb-4">
                04 / education
            </p>

            <h1 className="page-title">
                Education
            </h1>

            <p className="page-lead mt-6">
                My academic journey has given me a foundation in
                computer science, software development, databases,
                and problem solving. Projects turn that foundation
                into practical experience.
            </p>

            <div className="relative mt-10 space-y-6">
                <div className="absolute left-5 top-4 hidden h-[calc(100%-32px)] w-px bg-border sm:block" />

                {education.map((item, index) => (
                    <article
                        key={item.id || item.degree}
                        className="relative flex gap-5 sm:gap-7"
                    >
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-panel-2 font-mono text-xs font-semibold text-amber">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="card min-w-0 flex-1 p-6 sm:p-7">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-sm text-muted">
                                        <GraduationCap size={17} />
                                        <span className="font-mono">
                                            {item.type}
                                        </span>
                                    </div>

                                    <h2 className="mt-3 text-xl font-bold tracking-tight">
                                        {item.degree}
                                    </h2>

                                    <p className="mt-1 text-base text-muted">
                                        {item.institution}
                                    </p>
                                </div>

                                <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-panel-2 px-3 py-2 font-mono text-xs text-muted">
                                    <CalendarDays size={14} />
                                    {item.duration}
                                </div>
                            </div>

                            {item.location && (
                                <div className="mt-5 flex items-center gap-2 text-sm text-muted">
                                    <MapPin size={15} />
                                    {item.location}
                                </div>
                            )}

                            <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
                                {item.description}
                            </p>

                            {item.details?.length > 0 && (
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {item.details.map((detail) => (
                                        <span
                                            key={detail}
                                            className="tag"
                                        >
                                            {detail}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-amber"
                                >
                                    View institution
                                    <ArrowUpRight size={15} />
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            <PageNavigation
                previous="/skills"
                previousLabel="Skills & Tools"
                next="/contact"
                nextLabel="Contact"
            />
        </div>
    );
}