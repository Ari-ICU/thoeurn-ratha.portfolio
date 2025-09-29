"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  telegram: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    telegram: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "sending"
  >("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.telegram.trim() && !/^[A-Za-z0-9_]{5,}$/.test(formData.telegram)) {
      newErrors.telegram = "Telegram username must be at least 5 characters and contain only letters, numbers, or underscores";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = name === "telegram" ? value.replace(/^@+/, "") : value;
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus("sending");

    try {
      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

      const message = `
📬 *New Contact Form Submission*  
👤 *Name*: ${formData.name}  
📧 *Email*: [${formData.email}](mailto:${formData.email})  
🆔 *Telegram*: ${formData.telegram
          ? `@[${formData.telegram}](https://t.me/${formData.telegram})`
          : "Not provided"}  
💬 *Message*:
━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}
━━━━━━━━━━━━━━━━━━━━━━━━
🕒 *Received*: ${new Date().toLocaleString("en-US", {
            timeZone: "Asia/Phnom_Penh",
            dateStyle: "medium",
            timeStyle: "short",
          })} ICT
      `;

      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send to Telegram");

      setStatus("success");
      setFormData({ name: "", email: "", telegram: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 animate-fade-in-up mb-2">
            I strive to respond within 24 hours. You can reach out via email,
            Telegram, or connect through my social media channels.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 animate-fade-in-up">
            Whether it’s a new project idea, feedback, or just a friendly hello,
            don’t hesitate to get in touch!
          </p>
        </div>

        <div
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 animate-slide-up"
          role="form"
          aria-labelledby="contact-form-title"
        >
          <h3 id="contact-form-title" className="sr-only">
            Contact Form
          </h3>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-3xl opacity-20 blur-xl"></div>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative space-y-6"
            >
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-all duration-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full px-5 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-all duration-300
                    ${errors.name
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:ring-blue-300 focus:border-blue-500"
                    } 
                    bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 hover:border-blue-400`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-all duration-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-5 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-all duration-300
                    ${errors.email
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:ring-blue-300 focus:border-blue-500"
                    } 
                    bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 hover:border-blue-400`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Telegram Field */}
              <div className="relative">
                <label
                  htmlFor="telegram"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-all duration-300"
                >
                  Telegram Username (optional)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-gray-400 dark:text-gray-300">
                    @
                  </span>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="YourTelegramUsername"
                    className={`w-full pl-10 pr-5 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-all duration-300
                      ${errors.telegram
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-200 focus:ring-blue-300 focus:border-blue-500"
                      } 
                      bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 hover:border-blue-400`}
                    aria-invalid={!!errors.telegram}
                    aria-describedby={errors.telegram ? "telegram-error" : undefined}
                  />
                </div>
                {errors.telegram && (
                  <p
                    id="telegram-error"
                    className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    {errors.telegram}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 transition-all duration-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full px-5 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-all duration-300 resize-none
                    ${errors.message
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:ring-blue-300 focus:border-blue-500"
                    } 
                    bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 hover:border-blue-400`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                  ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-900 to-cyan-700 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  } 
                  text-white shadow-md`}
                aria-label={isSubmitting ? "Sending message" : "Send message"}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Status Message */}
              {status === "success" && (
                <p
                  className="mt-4 text-green-600 dark:text-green-400 text-center flex items-center justify-center gap-2 animate-fade-in"
                  role="alert"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p
                  className="mt-4 text-red-600 dark:text-red-400 text-center flex items-center justify-center gap-2 animate-fade-in"
                  role="alert"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out 0.2s forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.4s forwards;
        }
        input:focus + label,
        textarea:focus + label {
          transform: translateY(-2px);
          color: #3b82f6;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
