import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import TerminalWindow from "./TerminalWindow";
import { contactInfo } from "../data/portfolio";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const inputClass = "w-full bg-matrix-bg border border-matrix-border rounded-sm px-3 py-2 text-xs text-matrix-text placeholder-matrix-text-muted/50 focus:border-matrix-primary focus:outline-none transition-colors";

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t border-matrix-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="06" title="CONTACT" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <TerminalWindow title="send_message.exe">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] text-matrix-primary tracking-widest mb-1">&gt; NAME</label>
                  <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} className={inputClass} placeholder="Enter your name" />
                  {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] text-matrix-primary tracking-widest mb-1">&gt; EMAIL</label>
                  <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="Enter your email" />
                  {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-[10px] text-matrix-primary tracking-widest mb-1">&gt; MESSAGE</label>
                  <textarea id="contact-message" name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Type your message..." />
                  {errors.message && <p className="text-red-400 text-[10px] mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full flex items-center justify-between px-4 py-2.5 border border-matrix-primary text-matrix-primary text-xs tracking-widest uppercase hover:bg-matrix-primary hover:text-matrix-bg transition-all duration-300 glow-box-hover">
                  <span>&gt; SEND_MESSAGE</span>
                  <FiArrowRight size={14} />
                </button>
                {submitted && <p className="text-matrix-secondary text-[10px] tracking-widest">&gt; MESSAGE_SENT_SUCCESSFULLY</p>}
              </form>
            </TerminalWindow>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold text-matrix-text leading-tight">
                {contactInfo.heading}<br />
                <span className="text-matrix-primary glow-text">{contactInfo.headingAccent}</span>
              </h3>
            </div>
            <div className="space-y-3">
              {contactInfo.details.map((detail, index) => {
                const Icon = detail.icon;
                const content = (
                  <div className="flex items-center gap-3 p-3 border border-matrix-border rounded-sm bg-matrix-surface hover:border-matrix-border-bright transition-colors group">
                    <Icon size={14} className="text-matrix-primary flex-shrink-0" />
                    <span className="text-xs text-matrix-text-muted group-hover:text-matrix-text transition-colors">{detail.value}</span>
                  </div>
                );
                return detail.href ? (
                  <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="block no-underline">{content}</a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
