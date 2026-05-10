import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const styles = {
  primary:
    "border-white bg-white text-ink-950 hover:border-signal-cyan hover:bg-signal-cyan focus-visible:outline-signal-cyan",
  secondary:
    "border-white/20 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:outline-white",
  quiet:
    "border-transparent bg-transparent text-white/70 hover:text-white focus-visible:outline-signal-cyan",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = true,
  icon = true,
  ...props
}) {
  return (
    <motion.a
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-3 font-display text-sm font-semibold uppercase text-balance transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${styles[variant]} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <FiArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </motion.a>
  );
}
