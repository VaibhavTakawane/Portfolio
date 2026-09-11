import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  Search,
  ArrowRight,
} from "lucide-react";

import {
  navItems,
  profile,
} from "../data/content";

import {
  useTheme,
} from "../context/ThemeContext";

export default function CommandPalette({
  open,
  onClose,
  onToggleMusic,
}) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const { toggleTheme } = useTheme();

  const commands = useMemo(
    () => [
      ...navItems.map((item) => ({
        label: `Go to ${item.label}`,
        run: () => navigate(item.path),
      })),

      {
        label: "Toggle theme",
        run: toggleTheme,
      },

      {
        label: "Toggle background music",
        run: onToggleMusic,
      },

      {
        label: "Open GitHub profile",
        run: () =>
          window.open(
            profile.github,
            "_blank"
          ),
      },

      {
        label: "Copy email address",
        run: () =>
          navigator.clipboard.writeText(
            profile.email
          ),
      },
    ],
    [
      navigate,
      toggleTheme,
      onToggleMusic,
    ]
  );

  const filtered = commands.filter((command) =>
    command.label
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!open) return;

    setQuery("");
    setIndex(0);

    setTimeout(
      () => inputRef.current?.focus(),
      0
    );
  }, [open]);

  useEffect(
    () => setIndex(0),
    [query]
  );

  if (!open) return null;

  const runAndClose = (command) => {
    command.run();
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setIndex((i) =>
        Math.min(
          i + 1,
          Math.max(
            filtered.length - 1,
            0
          )
        )
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setIndex((i) =>
        Math.max(i - 1, 0)
      );
    }

    if (
      e.key === "Enter" &&
      filtered[index]
    ) {
      runAndClose(filtered[index]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/65 px-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-panel shadow-2xl"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-4">
          <Search
            size={19}
            className="text-muted"
          />

          <input
            ref={inputRef}
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Search for a command..."
            className="flex-1 bg-transparent text-base text-text outline-none placeholder:text-muted"
          />

          <kbd className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted">
            Esc
          </kbd>
        </div>

        <ul className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-4 text-sm text-muted">
              No matching commands
            </li>
          )}

          {filtered.map((command, i) => (
            <li
              key={command.label}
              onMouseEnter={() =>
                setIndex(i)
              }
              onClick={() =>
                runAndClose(command)
              }
              className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${i === index
                  ? "bg-panel-2 text-amber"
                  : "text-text hover:bg-panel-2"
                }`}
            >
              {command.label}

              {i === index && (
                <ArrowRight size={16} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}