import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { assets, hero, projects, socials } from "../data/portfolio.js";
import { stagger, slowReveal } from "../animations/variants.js";
import { useMouseTilt } from "../hooks/useMouseTilt.js";
import Button from "../components/ui/Button.jsx";
import MagneticLink from "../components/ui/MagneticLink.jsx";

const socialIcons = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  mail: FiMail,
};

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const textY = useTransform(scrollYProgress, [0, 0.24], [0, -90]);
  const visualY = useTransform(scrollYProgress, [0, 0.24], [0, 70]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.25]);
  const tilt = useMouseTilt(8);
  const cityLink = projects[0];

  return (
    <section
      id="home"
      className="hero-shell relative isolate min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:px-12"
    >
      <motion.div
        className="hero-light"
        style={{ opacity: glowOpacity }}
        aria-hidden="true"
      />
      <div className="noise-layer" aria-hidden="true" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.03fr_0.97fr]">
        <motion.div
          className="relative z-10 pb-12 lg:pb-0"
          style={{ y: textY }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={slowReveal}
            className="mb-5 font-display text-sm font-semibold uppercase text-signal-cyan"
          >
            {hero.role}
          </motion.p>

          <motion.h1
            variants={slowReveal}
            className="max-w-5xl font-display text-7xl font-black leading-[0.78] text-white sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[11rem]"
          >
            <span className="block">Arnav</span>
            <span className="block translate-x-[8vw] text-outline sm:translate-x-[11vw]">
              Bhure
            </span>
          </motion.h1>

          <motion.div variants={slowReveal} className="mt-8 max-w-2xl">
            <p className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {hero.statement}
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              {hero.subcopy}
            </p>
          </motion.div>

          <motion.div
            variants={slowReveal}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href={assets.resume}>Resume</Button>
            <Button href={cityLink.live} variant="secondary">
              View CityLink
            </Button>
          </motion.div>

          <motion.div
            variants={slowReveal}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <span
              className="mr-2 hidden h-px w-16 bg-white/20 sm:block"
              aria-hidden="true"
            />
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <MagneticLink
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center border border-white/10 bg-white/[0.02] text-white/70 transition-colors hover:border-signal-cyan hover:text-signal-cyan"
                  strength={12}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </MagneticLink>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-0 min-h-[540px] lg:min-h-[720px]"
          style={{ y: visualY }}
        >
          <div className="absolute right-0 top-6 hidden w-52 border-l border-signal-cyan/30 pl-4 font-mono text-[11px] leading-5 text-signal-cyan/60 lg:block">
            <span>{"<human creativity />"}</span>
            <br />
            <span>{"const systems = build(usefulProducts)"}</span>
            <br />
            <span>{"engineer.intentional_motion()"}</span>
          </div>

          <motion.div
            className="portrait-stage"
            {...tilt.handlers}
            style={tilt.style}
          >
            <div className="portrait-shadow" aria-hidden="true" />
            <img
              src={assets.portrait}
              alt="Half human half digital portrait of Arnav Bhure"
              className="portrait-image"
            />
            <div className="portrait-mask left" aria-hidden="true" />
            <div className="portrait-mask right" aria-hidden="true" />
            <div className="scanlines" aria-hidden="true" />
            <span className="code-particle particle-a" aria-hidden="true">
              {"{ useState }"}
            </span>
            <span className="code-particle particle-b" aria-hidden="true">
              interface / systems
            </span>
            <span className="code-particle particle-c" aria-hidden="true">
              solve - ship
            </span>
          </motion.div>

          <div className="hero-meta-panel">
            <span>{hero.availability}</span>
            <span>MERN Stack Developer / Competitive Programming</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
