
import { ToastContainer, toast } from "react-toastify";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const hasErrors = () => {
    return Object.values(errors).some((error) => error !== "");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (hasErrors()) {
      toast.error("Please fix errors before submitting ❌");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );

      toast.success("Message Sent Successfully ✅");

      form.current.reset();   // ✅ Reset form
      setErrors({});
    } catch (error) {
      toast.error("Error sending message ❌");
    }

    setLoading(false);
  };



  // 🔥 Real-time validation function
  const validateField = (name, value) => {
    let error = "";

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Enter valid email address";
      }
    }

    if (name === "phone") {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(value)) {
        error = "Enter valid 10-digit mobile number";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };







  return (
    <div className="container my-5">
      <ToastContainer position="top-right" autoClose={3000} />

      <form ref={form} onSubmit={sendEmail}>

        {/* Name */}
        <div className="input-group mb-1">
          <span className="input-group-text">Full Name</span>
          <input
            type="text"
            name="name"
            className="form-control"
            required
          />
        </div>
        {errors.name && <small className="text-danger">{errors.name}</small>}

        {/* Email */}
        <div className="input-group mb-1 mt-3">
          <span className="input-group-text">Email-Id</span>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => validateField("email", e.target.value)}
            required
          />
        </div>
        {errors.email && <small className="text-danger">{errors.email}</small>}

        {/* Phone */}
        <div className="input-group mb-1 mt-3">
          <span className="input-group-text">Phone No</span>
          <input
            type="text"
            name="phone"
            className="form-control"
            onChange={(e) => validateField("phone", e.target.value)}
            required
          />
        </div>
        {errors.phone && <small className="text-danger">{errors.phone}</small>}

        {/* Message */}
        <div className="input-group mt-3">
          <span className="input-group-text">Message</span>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            required
          />
        </div>

        <button
          className="btn btn-primary mt-4 contact-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit Now"}
        </button>

      </form>
    </div>
  );
}
