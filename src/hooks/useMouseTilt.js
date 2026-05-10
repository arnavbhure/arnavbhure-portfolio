import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useMouseTilt(intensity = 18) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 90, damping: 22, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 22, mass: 0.4 });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-intensity, intensity]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [intensity, -intensity]);
  const moveX = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const moveY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    handlers: { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave },
    style: { rotateX, rotateY, x: moveX, y: moveY },
  };
}
