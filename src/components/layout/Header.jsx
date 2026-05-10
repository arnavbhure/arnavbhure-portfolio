import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { navItems, socials } from "../../data/portfolio.js";
import MagneticLink from "../ui/MagneticLink.jsx";

const iconMap = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  mail: FiMail,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all duration-500 sm:px-6 lg:px-8 ${
        scrolled ? "bg-ink-950/84 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3 font-display text-sm font-bold uppercase text-white">
          <span className="grid size-8 place-items-center border border-white/20 text-[11px] transition-colors group-hover:border-signal-cyan group-hover:text-signal-cyan">
            AB
          </span>
          <span className="hidden text-white/70 sm:inline">Human / Systems</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link font-display text-xs font-semibold uppercase text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socials.slice(0, 3).map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <MagneticLink
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid size-9 place-items-center border border-white/10 text-white/70 transition-colors hover:border-signal-cyan hover:text-signal-cyan"
                strength={10}
              >
                <Icon aria-hidden="true" className="size-4" />
              </MagneticLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
