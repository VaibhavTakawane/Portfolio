import { NavLink } from "react-router-dom";

import {
  FileCode2,
  FolderOpen,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

import {
  navItems,
  profile,
} from "../data/content";

export default function Sidebar({
  open,
  onClose,
}) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/55 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 z-40 h-full w-72 shrink-0 border-r border-border bg-panel shadow-2xl transition-transform md:static md:translate-x-0 md:shadow-none ${open
            ? "translate-x-0"
            : "-translate-x-full"
          }`}
      >
        <div className="border-b border-border p-6">
          <div className="flex items-center gap-2 font-mono text-sm text-muted">
            <FolderOpen
              size={17}
              className="text-amber"
            />

            <span>
              {profile.name
                .toLowerCase()
                .replace(/\s+/g, "-")}
            </span>
          </div>

          <h1 className="mt-4 text-xl font-bold tracking-tight text-text">
            {profile.name}
          </h1>

          <p className="mt-1 text-sm leading-6 text-muted">
            {profile.role}
          </p>
        </div>

        <nav className="space-y-1 p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl border px-4 py-3 text-base font-medium transition-all duration-200 ${isActive
                  ? "border-amber/30 bg-panel-2 text-amber shadow-sm"
                  : "border-transparent text-muted hover:-translate-y-0.5 hover:border-border hover:bg-panel-2 hover:text-text"
                }`
              }
            >
              <FileCode2 size={17} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 flex gap-2 border-t border-border p-4">
          {[
            [profile.github, Github, "GitHub"],
            [
              profile.linkedin,
              Linkedin,
              "LinkedIn",
            ],
          ].map(([href, Icon, label]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="icon-button"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}