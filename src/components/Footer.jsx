import { Github, Linkedin, ExternalLink } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-panel">
            <div className="mx-auto w-full max-w-[1180px] px-5 py-8 sm:px-8">
                <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

                    {/* Copyright */}
                    <div>
                        <p className="text-sm font-medium text-muted">
                            © {year}{" "}
                            <span className="text-text">
                                {profile.name}
                            </span>
                            . All rights reserved.
                        </p>

                        <p className="mt-1 text-xs text-muted">
                            Built with React, Tailwind CSS & passion.
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-2">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="icon-button"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="icon-button"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href={profile.resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Resume"
                            className="icon-button"
                        >
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="mt-6 border-t border-border pt-5 text-center">
                    <p className="text-xs text-muted">
                        Designed & developed by{" "}
                        <span className="font-semibold text-amber">
                            {profile.name}
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}