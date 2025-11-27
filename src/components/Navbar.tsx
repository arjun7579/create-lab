import { NavLink } from "react-router-dom";
import { Github } from "lucide-react";

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm transition-colors ${
        isActive ? "bg-white/10" : "hover:bg-white/5"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-nav-bg border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent to-indigo-600 flex items-center justify-center font-bold text-primary">
          CL
        </div>
        <div>
          <div className="text-lg font-bold tracking-widest">C.R.E.A.T.E LAB</div>
          <div className="text-xs text-foreground/60">
            Centre for Resilient Environments & Autonomous Technologies
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <div className="hidden md:flex items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/members">Members</NavItem>
          <NavItem to="/publications">Publications</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>

        <a
          className="ml-3 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-white/5 transition-colors"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Github size={16} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </nav>
  );
}
