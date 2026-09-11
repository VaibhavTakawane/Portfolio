import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/content";

export default function TabBar({
  sidebarOpen,
  onToggleSidebar,
}) {
  const { pathname } = useLocation();

  const active =
    navItems.find((item) =>
      item.path === "/"
        ? pathname === "/"
        : pathname.startsWith(item.path)
    ) || navItems[0];

  return (
    <div className="flex h-12 items-center border-b border-border bg-panel px-2">
      <button
        className="icon-button mr-1 md:hidden"
        onClick={onToggleSidebar}
        aria-label="Toggle navigation"
      >
        {sidebarOpen ? (
          <X size={20} />
        ) : (
          <Menu size={20} />
        )}
      </button>

      <div className="flex h-full items-center gap-2 border-r border-border bg-panel-2 px-4 font-mono text-sm font-medium text-text">
        <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_10px_var(--amber)]" />
        {active.label}
      </div>
    </div>
  );
}