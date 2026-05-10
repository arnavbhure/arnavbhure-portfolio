export default function Section({ id, children, className = "", bleed = false }) {
  return (
    <section id={id} className={`relative ${bleed ? "" : "px-5 sm:px-8 lg:px-12"} ${className}`}>
      {children}
    </section>
  );
}
