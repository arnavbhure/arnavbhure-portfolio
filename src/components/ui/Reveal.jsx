import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants.js";

export default function Reveal({ children, className = "", delay = 0, variants = fadeUp, once = true }) {
  const visible =
    delay > 0
      ? {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            delay,
          },
        }
      : variants.visible;

  return (
    <motion.div
      className={className}
      variants={{ hidden: variants.hidden, visible }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.28 }}
    >
      {children}
    </motion.div>
  );
}
