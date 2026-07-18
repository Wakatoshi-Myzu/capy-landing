import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const steps = [
  {
    number: "01",
    icon: "ph:wallet-bold",
    title: "Get a Wallet",
    desc: "Download Phantom or Solflare wallet on your phone or browser extension. Top up with some SOL.",
  },
  {
    number: "02",
    icon: "ph:arrows-left-right-bold",
    title: "Swap for $CAPY",
    desc: "Use Raydium or Jupiter Aggregator to swap your SOL for $CAPYCOIN. Slippage: 5%.",
  },
  {
    number: "03",
    icon: "ph:smiley-bold",
    title: "Join the Capy Crew",
    desc: "Hold your $CAPY, join our Telegram, follow us on Twitter, and enjoy the ride!",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function GettingStartedSection() {
  return (
    <section id="howtobuy" className="section bg-img-white-section">
      <div className="page-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 font-sans font-bold text-xs px-3 py-1 rounded-full mb-4">
            <Icon icon="ph:rocket-bold" className="w-3.5 h-3.5" />
            Getting Started
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-slate-800 mb-4">
            How to Buy
            <span className="text-green-500"> $CAPY</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm">
            Getting your first bag of $CAPY is easier than teaching a capybara
            to swim. Follow these steps:
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 bg-green-200 z-0" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="step-card p-6 sm:p-8 text-center relative z-10"
            >
              {/* Step Number Circle */}
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="font-heading text-lg text-white">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <Icon
                icon={step.icon}
                className="w-9 h-9 mx-auto mb-3 text-green-500"
              />

              <h3 className="font-heading text-lg text-slate-800 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 font-sans text-xs leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-sans font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <Icon icon="ph:smiley-bold" className="w-5 h-5" /> Buy $CAPY Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
