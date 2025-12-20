import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
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

        <form className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-white/10 dark:text-white-95 flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-200 dark:border-white/10 focus:outline-none p-3 rounded-md bg-transparent"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-200 dark:border-white/10 focus:outline-none p-3 rounded-md bg-transparent"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-gray-200 dark:border-white/10 focus:outline-none p-3 rounded-md bg-transparent resize-none"
          />

          <button
            type="submit"
            className="bg hover:opacity-90 transition text-white py-3 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
