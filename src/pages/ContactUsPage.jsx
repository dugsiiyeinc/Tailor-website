import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";

const ContactPage = () => {
  const {isLoading}=useAuth()

  const API_key=import.meta.env.VITE_EMAIL_APIKEY;

const onSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  formData.append("access_key", API_key);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Thank you for sending message", {
        position: "top-right",
      });

      form.reset();
    } else {
      toast.error("Something went wrong", {
        position: "top-right",
      });
    }
  } catch (error) {
    toast.error("Network error", {
      position: "top-right",
    });
  }
};

  return (
    <section className="min-h-screen px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6 dark:text-white-95">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-600 dark:text-white/70">
            Have questions or need a custom order? We’re here to help.
          </p>

          <div className="flex items-center gap-4">
            <Phone className="text-cyan-600" />
            <span>+252 61 000 0000</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-cyan-600" />
            <span>support@tailorshop.com</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-cyan-600" />
            <span>Mogadishu, Somalia</span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-white/10 dark:text-white-95 flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-200 dark:border-white/10 focus:outline-none p-3 rounded-md bg-transparent"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-200 dark:border-white/10 focus:outline-none p-3 rounded-md bg-transparent"
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="border border-gray-200 dark:border-white/10 focus:outline-none p-3 rounded-md bg-transparent resize-none"
            required
          />

          <button
            disabled={isLoading}
            type="submit"
            className="bg hover:opacity-90 transition text-white py-3 rounded-md"
          >
            { isLoading ? 'Sending...':'Send Message'}  
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
