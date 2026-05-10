import { socials } from "../../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>Built by Arnav Bhure with React, Tailwind, and Framer Motion.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:text-white">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
