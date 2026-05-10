import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiLoader, FiMail, FiSend } from "react-icons/fi";
import { contact } from "../data/portfolio.js";
import Reveal from "../components/ui/Reveal.jsx";
import Section from "../components/ui/Section.jsx";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const payload = new FormData();
      payload.append("access_key", contact.formKey);
      payload.append("subject", "Portfolio contact from arnavbhure.vercel.app");
      Object.entries(form).forEach(([key, value]) => payload.append(key, value));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Unable to send message.");
      }

      setForm(initialState);
      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 4200);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="section-y contact-section">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="mb-5 font-display text-xs font-semibold uppercase text-signal-cyan">Contact</p>
          <h2 className="font-display text-6xl font-black leading-[0.86] text-white sm:text-8xl lg:text-9xl">
            Let&apos;s build the useful part.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-white/60">
            Send a project idea, collaboration note, or feedback on the work. I read direct messages with the same care I give product details.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-3 font-display text-lg font-semibold text-white transition-colors hover:text-signal-cyan"
          >
            <FiMail aria-hidden="true" />
            {contact.email}
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span>First name</span>
                <input name="first_name" value={form.first_name} onChange={updateField} autoComplete="given-name" required />
              </label>
              <label>
                <span>Last name</span>
                <input name="last_name" value={form.last_name} onChange={updateField} autoComplete="family-name" required />
              </label>
            </div>
            <label>
              <span>Email</span>
              <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" value={form.phone} onChange={updateField} autoComplete="tel" />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                rows="6"
                required
                placeholder="Tell me what you are building, where it feels stuck, or what kind of interface you want to shape."
              />
            </label>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" disabled={status === "loading"} className="contact-submit">
                {status === "loading" ? <FiLoader className="size-4 animate-spin" aria-hidden="true" /> : <FiSend className="size-4" aria-hidden="true" />}
                {status === "loading" ? "Sending" : "Send message"}
              </button>
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="inline-flex items-center gap-2 text-sm text-signal-green"
                  >
                    <FiCheck aria-hidden="true" />
                    Message sent. I&apos;ll reply soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="text-sm text-red-300"
                  >
                    Could not send right now. Email me directly at {contact.email}.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
