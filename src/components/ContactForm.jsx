import React, { useState } from "react";
import "./ContactForm.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    else if (!validateEmail(form.email)) err.email = "Invalid email";
    if (!form.message.trim()) err.message = "Message is required";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.status === 200) {
        setSubmitted(true);
        setForm(initialState);
      } else {
        setErrors({ api: "Submission failed. Try again." });
      }
    } catch {
      setErrors({ api: "Network error. Try again." });
    }
    setLoading(false);
  };

  return (
    <div className="contact-bg">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Join the Story</h2>
          <p className="subtitle">
            Ready to bring your vision to life? Let’s talk.
          </p>
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <input
              name="name"
              type="text"
              placeholder="Your name*"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              name="email"
              type="email"
              placeholder="Your email*"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              disabled={loading}
            />
            <textarea
              name="message"
              placeholder="Your message*"
              value={form.message}
              onChange={handleChange}
              disabled={loading}
              rows={5}
            />
            {errors.message && <span className="error">{errors.message}</span>}
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            {errors.api && <span className="error">{errors.api}</span>}
            {submitted && (
              <span className="success">Form Submitted</span>
            )}
          </form>
          <div className="contact-info">
            <span className="email">vernita@varnanfilms.co.in</span>
            <span className="phone">+91 98736 84567</span>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-text">
            <p>
              Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.<br />
              Let’s catch up over coffee.<br />
              Great stories always begin with a good conversation
            </p>
          </div>
        </div>
      </div>
      <div className="contact-corner-decoration"></div>
    </div>
  );
};

export default Contact;