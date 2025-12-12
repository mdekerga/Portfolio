import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Optional Formspree endpoint via Vite env: VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/<your-id>
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  function validate(values) {
    const errs = {};
    if (!values.name.trim()) errs.name = "Nom requis";
    if (!values.email.trim()) errs.email = "Email requis";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errs.email = "Email invalide";
    if (!values.message.trim()) errs.message = "Message requis";
    return errs;
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);

    if (FORMSPREE_ENDPOINT) {
      try {
        const resp = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: form.name, email: form.email, message: form.message, _replyto: form.email }),
        });

        if (!resp.ok) {
          const data = await resp.json().catch(() => null);
          setErrors({ form: data?.error || "Erreur lors de l'envoi, réessayez." });
        } else {
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
        }
      } catch (err) {
        setErrors({ form: "Erreur réseau, réessayez." });
      } finally {
        setSubmitting(false);
        setTimeout(() => setSuccess(false), 3500);
      }
    } else {
      // Fallback (simulated send)
      try {
        await new Promise((r) => setTimeout(r, 900));
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } catch (err) {
        setErrors({ form: "Impossible d'envoyer le message. Réessayez." });
      } finally {
        setSubmitting(false);
        setTimeout(() => setSuccess(false), 3500);
      }
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`mb-24 flex flex-col items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
      }`}
    >
      <h2 className="text-primary text-4xl font-bold mb-6">Contact</h2>

      <div className="container mx-auto w-full">
        <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6">
          {!FORMSPREE_ENDPOINT && (
            <div className="mb-4 text-sm text-neutral">Formulaire en mode simulation — configurez VITE_FORMSPREE_ENDPOINT pour l’envoi réel.</div>
          )}
          {errors.form && (
            <div className="alert alert-error mb-4">{errors.form}</div>
          )}

          {success && (
            <div className="alert alert-success mb-4">Message envoyé avec succès !</div>
          )}

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="label">
                <span className="label-text">Nom</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`input input-bordered w-96 ${errors.name ? "input-error" : ""}`}
                type="text"
                placeholder="Votre nom"
              />
              {errors.name && <span className="text-error text-sm">{errors.name}</span>}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`input input-bordered w-96 ${errors.email ? "input-error" : ""}`}
                placeholder="votre@email.com"
              />
              {errors.email && <span className="text-error text-sm">{errors.email}</span>}
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`textarea textarea-bordered w-96 ${errors.message ? "textarea-error" : ""}`}
                rows={6}
                placeholder="Votre message..."
              />
              {errors.message && <span className="text-error text-sm">{errors.message}</span>}
            </div>

            <div className="flex items-center justify-end mt-2">
              <button className={`btn btn-primary ${submitting ? "loading" : ""}`} type="submit" disabled={submitting}>
                {submitting ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
