import { Scissors, ShieldCheck, Clock } from "lucide-react";

const AboutPage = () => {
    const colorClasses={
        primary:"from-primary-500 to-primary-600",
        secondary:"from-secondary-500 to-secondary-600",
        accent:"from-accent-500 to-accent-600"
    }
  return (
    <section className="min-h-screen px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 dark:text-white-95">About Our Tailor <span className="text-cyan-700">Shop</span></h1>
          <p className="text-gray-600 dark:text-white/70">
            We craft premium suits, jackets, and trousers tailored perfectly to your body and style.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="relative">

          <img
            src="/images/bg-4.png"
            alt="Tailoring"
            className="rounded-xl object-cover w-full h-80"
          />
          <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
          <div className="absolute inset-0 flex flex-col justify-center">
            <h1 className="text-white-95 text-6xl text-center">Tailor <span className="text-cyan-700">Shop</span></h1>
          </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold dark:text-white-95">Our Story</h2>
            <p className="text-gray-600 dark:text-white/70">
              Founded with a passion for craftsmanship, our tailor shop blends
              tradition with modern design. Every piece is handmade with precision,
              ensuring comfort, elegance, and durability.
            </p>
            <p className="text-gray-600 dark:text-white/70">
              From formal suits to casual wear, we make clothing that fits your life.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 dark:text-white-95">
          <div className={`group p-6 rounded-xl border border-gray-200  dark:border-gray-700 transition-all duration-500 shadow-md hover:-translate-y-1 backdrop-blur-sm dark:text-white`}>
          <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${colorClasses['primary']} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <Scissors className="text-white/95" size={32} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Expert Craftsmanship</h3>
            <p className="text-sm text-gray-600 dark:text-white/70">
              Skilled tailors with years of experience.
            </p>
          </div>
          </div>
          <div className={`group p-6 rounded-xl border border-gray-200  dark:border-gray-700 transition-all duration-500 shadow-md hover:-translate-y-1 backdrop-blur-sm dark:text-white`}>
          <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${colorClasses['secondary']} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <ShieldCheck className="text-white/95" size={32} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Premium Quality</h3>
            <p className="text-sm text-gray-600 dark:text-white/70">
              We use only high-quality fabrics and materials.
            </p>
          </div>
          </div>
          <div className={`group p-6 rounded-xl border border-gray-200  dark:border-gray-700 transition-all duration-500 shadow-md hover:-translate-y-1 backdrop-blur-sm dark:text-white`}>
          <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${colorClasses['accent']} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <Clock  className="text-white/95" size={32} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">On-Time Delivery</h3>
            <p className="text-sm text-gray-600 dark:text-white/70">
              Your order is delivered exactly when promised.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
