import { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "../data/content";

import PageNavigation from "../components/PageNavigation";


export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto px-6 py-14">

      <h1 className="text-2xl font-mono font-semibold mb-4">Get in touch</h1>
      <p className="text-muted leading-relaxed mb-8">
        The fastest way to reach me is email. I'm always open to talking about
        interesting projects, freelance work, or full-time roles.
      </p>

      <div className="flex items-center gap-3 mb-10">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber text-bg font-mono text-sm rounded-sm hover:opacity-90"
        >
          <Mail size={14} /> {profile.email}
        </a>
        <button
          onClick={copyEmail}
          aria-label="Copy email address"
          className="p-2 border border-border rounded-sm hover:bg-panel-2"
        >
          {copied ? <Check size={16} className="text-amber" /> : <Copy size={16} />}
        </button>
      </div>

      <p className="font-mono text-xs text-muted mb-3">// elsewhere</p>
      <div className="flex gap-4">
        <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-text">
          <Github size={16} /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-text">
          <Linkedin size={16} /> LinkedIn
        </a>
        {/* <a href={profile.twitter} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-text">
          <Twitter size={16} /> Twitter
        </a> */}
      </div>
      <PageNavigation
        previous="/education"
        previousLabel="Education"
      />
    </div>
  );
}

