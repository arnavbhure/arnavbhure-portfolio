import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio.js";
import { fadeUp, stagger } from "../animations/variants.js";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Section from "../components/ui/Section.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

function TechTags({ stack }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span key={tech} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.live && (
        <Button href={project.live} variant="secondary" className="min-h-10 px-4 py-2">
          Live
        </Button>
      )}
      {project.github && (
        <Button href={project.github} variant="quiet" className="min-h-10 px-3 py-2" icon={false}>
          <FiGithub aria-hidden="true" className="size-4" />
          GitHub
        </Button>
      )}
    </div>
  );
}

function CityLinkSpotlight({ project }) {
  const points = [
    { label: "Problem", value: project.problem },
    { label: "Solution", value: project.solution },
    { label: "Impact", value: project.impact },
  ];

  return (
    <div className="citylink-shell mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Reveal>
            <p className="mb-4 font-display text-xs font-semibold uppercase text-signal-cyan">Featured build</p>
            <h3 className="font-display text-6xl font-black leading-[0.86] text-white sm:text-8xl lg:text-9xl">
              City
              <span className="block text-outline">Link</span>
            </h3>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/70">{project.summary}</p>
            <div className="mt-8">
              <ProjectLinks project={project} />
            </div>
          </Reveal>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.div variants={fadeUp} className="citylink-preview">
            <div className="city-map" aria-hidden="true">
              <span className="node node-a" />
              <span className="node node-b" />
              <span className="node node-c" />
              <span className="node node-d" />
              <span className="route route-a" />
              <span className="route route-b" />
              <span className="route route-c" />
            </div>
            <div className="citylink-interface">
              <div>
                <span className="font-mono text-xs uppercase text-signal-cyan">student relocation OS</span>
                <p className="mt-3 font-display text-3xl font-bold text-white">Find your next city rhythm.</p>
              </div>
              <div className="interface-list">
                <span>roommate match</span>
                <span>verified housing</span>
                <span>local essentials</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid gap-px bg-white/10">
            {points.map((point, index) => (
              <div key={point.label} className="case-row">
                <span className="font-mono text-xs text-signal-cyan/70">0{index + 1} / {point.label}</span>
                <p>{point.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <TechTags stack={project.stack} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectVisual({ project, index }) {
  const visualType = project.title.includes("Tic") ? "game" : project.title.includes("Amazon") ? "store" : "product";

  return (
    <div className={`project-visual accent-${project.accent}`}>
      <div className="visual-header">
        <span>{project.year}</span>
        <span>{project.type}</span>
      </div>
      {visualType === "game" ? (
        <div className="game-board" aria-hidden="true">
          {["", "X", "", "O", "X", "O", "", "", "X"].map((item, cellIndex) => (
            <span key={`${item}-${cellIndex}`}>{item}</span>
          ))}
        </div>
      ) : (
        <div className="product-wire" aria-hidden="true">
          <span className="wire-hero" />
          <span className="wire-line wide" />
          <span className="wire-line" />
          <span className="wire-line short" />
          <div className="wire-grid">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
      <span className="visual-index">0{index + 1}</span>
    </div>
  );
}

function ProjectRow({ project, index }) {
  const flipped = index % 2 === 1;

  return (
    <Reveal className="project-row">
      <div className={`grid items-center gap-8 lg:grid-cols-2 ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <ProjectVisual project={project} index={index} />
        <div className="project-copy">
          <p className="mb-4 font-display text-xs font-semibold uppercase text-signal-cyan">{project.type}</p>
          <h3 className="font-display text-4xl font-bold leading-none text-white sm:text-6xl">{project.title}</h3>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{project.summary}</p>
          <div className="mt-7">
            <TechTags stack={project.stack} />
          </div>
          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" className="section-y project-section">
      <SectionHeading
        eyebrow="Featured projects"
        title="Product thinking, not project tiles."
        kicker="Each build is framed as a small product system: user problem, interface decisions, stack choices, and the next iteration."
      />
      <CityLinkSpotlight project={featured} />
      <div className="mx-auto mt-20 max-w-7xl space-y-20">
        {rest.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index + 1} />
        ))}
      </div>
    </Section>
  );
}
