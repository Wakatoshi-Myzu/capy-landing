import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "ph:coins-bold",
    title: "Zero Taxes",
    desc: "Buy and sell without any tax. What you see is what you get — pure community trading.",
  },
  {
    icon: "ph:flame-bold",
    title: "LP Burned",
    desc: "Liquidity tokens are burned forever. No rug pulls, no shenanigans, just trust.",
  },
  {
    icon: "ph:users-bold",
    title: "Community Owned",
    desc: "The team renounced ownership. $CAPY belongs to the community, 100%.",
  },
  {
    icon: "ph:leaf-bold",
    title: "Pure Vibes",
    desc: "Zero drama, zero stress. Just capybaras chilling and the community growing.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

export default function FeaturesSection() {
  return (
    <section id="features" className="section bg-img-blue-section">
      <div className="page-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 font-sans font-bold text-xs px-3 py-1 rounded-full mb-4">
            <Icon icon="ph:sparkle-bold" className="w-3.5 h-3.5" />
            Why Choose $CAPY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-slate-800 mb-4">
            Why Capy?
            <span className="text-green-500"> Why Now?</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm">
            In a world full of stress, be a capybara. Here's why $CAPY is the
            only coin you need.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card p-6 text-center"
            >
              {/* Icon */}
              <Icon
                icon={feature.icon}
                className="w-10 h-10 mx-auto mb-4 text-amber-800"
              />
              <h3 className="font-heading text-lg text-amber-900 mb-2">
                {feature.title}
              </h3>
              <div className="w-8 h-0.5 bg-amber-300 mx-auto rounded-full mb-3" />
              <p className="text-amber-800/70 font-sans text-xs leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
