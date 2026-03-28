import { ToastContainer, toast } from "react-toastify";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/inquaryform.css';

export default function InquaryForm() {

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
                process.env.REACT_APP_ENQUIRY_MAIL_TEMPLATE_ID,
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
        <div className='inquary-form'>
            <div className='container'>
                <div className='row'>
                    <div className="inquary-content-bx col-lg-5 col-md-5 col-sm-12">
                        <h3 className="mb-3 heading">
                           Grow Your Business With Our <br/> <strong>Expert Solutions</strong>
                        </h3>
                    </div>

                    <div className="inquary-form-bx col-lg-7 col-md-7 col-sm-12">
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

                            <div className="mail-phon-wrap">
                                {/* Email */}
                                <div className="input-group mb-1 mt-3 ">
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

                            </div>


                            <button
                                className="btn btn-primary mt-4 contact-btn inquary-btn"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Get Quote"}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
