import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./MsContactForm.css";

const MsContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[a-zA-Z\s]+$/.test(formData.name))
      newErrors.name = "Please enter a valid name (letters only)";

    // Email validation
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";

    // Message validation
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Please enter valid information");
      return;
    }

    setErrors({});
    setSending(true);

    // Send email via EmailJS
    emailjs
      .send(
        "service_h3eavrd",   // replace with your EmailJS service ID
        "template_wanbn9c",  // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_email: "msmeti4501@gmail.com", // target email
        },
        "9aDHFbbP50PZ1BYON"     // replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", phone: "", email: "", message: "" });
          setSending(false);
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Try again later.");
          setSending(false);
        }
      );
  };

  return (
    <section className="ms-contact" id="contact">
      <div className="ms-contact-container">
        <h2 className="ms-contact-title">Contact Me</h2>
        <form className="ms-contact-form" onSubmit={handleSubmit}>
          <div className="ms-contact-group">
            <label>Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="ms-contact-error">{errors.name}</span>}
          </div>

          <div className="ms-contact-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="ms-contact-error">{errors.email}</span>}
          </div>

          <div className="ms-contact-group">
            <label>Phone No</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="ms-contact-group">
            <label>Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="ms-contact-error">{errors.message}</span>}
          </div>

          <button type="submit" className="ms-contact-btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MsContactForm;
