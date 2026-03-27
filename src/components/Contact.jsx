import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const initialState = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email is not valid.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Contact" subtitle="Let&apos;s connect and build something great." />
        <div className="max-w-3xl mx-auto glassmorphism p-7 rounded-3xl border border-white/20 shadow-soft">
          <p className="text-sm text-slate-200 mb-4">Reach out to me at <a href="mailto:subharharini05@gmail.com" className="text-cyan-300 hover:text-cyan-200">subharharini05@gmail.com</a></p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-slate-200 mb-2" htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                {errors.name && <p className="text-red-300 mt-1 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-slate-200 mb-2" htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                {errors.email && <p className="text-red-300 mt-1 text-sm">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-slate-200 mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="5" className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              {errors.message && <p className="text-red-300 mt-1 text-sm">{errors.message}</p>}
            </div>
            <button type="submit" className="mt-5 w-full px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">Send Message</button>
            {submitted && <p className="mt-4 text-emerald-300 font-medium">Thanks! Your message has been submitted.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
