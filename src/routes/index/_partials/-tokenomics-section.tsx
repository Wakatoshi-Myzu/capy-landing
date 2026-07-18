import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const allocations = [
  { label: "Liquidity Pool", value: 90, color: "#22c55e" },
  { label: "Community Airdrop", value: 5, color: "#f59e0b" },
  { label: "CEX Listings", value: 3, color: "#3b82f6" },
  { label: "Marketing", value: 2, color: "#a855f7" },
];

const tokenStats = [
  { label: "Token Name", value: "CAPYCOIN", icon: "ph:smiley-bold" },
  { label: "Symbol", value: "$CAPY", icon: "ph:diamond-bold" },
  { label: "Blockchain", value: "Solana", icon: "ph:circle" },
  { label: "Total Supply", value: "1,000,000,000", icon: "ph:chart-bar-bold" },
  { label: "Tax", value: "0% / 0%", icon: "ph:prohibit-bold" },
  { label: "Contract", value: "Renounced", icon: "ph:lock-bold" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="section bg-img-blue-section">
      <div className="page-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 font-sans font-bold text-xs px-3 py-1 rounded-full mb-4">
            <Icon icon="ph:chart-bar-bold" className="w-3.5 h-3.5" />
            Tokenomics
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-slate-800 mb-4">
            $CAPY
            <span className="text-green-500"> by the Numbers</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm">
            Simple, transparent, and fair. No hidden allocations, no team
            tokens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Pie chart */}
              <div
                className="w-full h-full rounded-full shadow-lg"
                style={{
                  background: `conic-gradient(${allocations
                    .map((item, i) => {
                      const total = allocations.reduce(
                        (sum, a) => sum + a.value,
                        0,
                      );
                      const start = allocations
                        .slice(0, i)
                        .reduce((sum, a) => sum + (a.value / total) * 100, 0);
                      const end = start + (item.value / total) * 100;
                      return `${item.color} ${start}% ${end}%`;
                    })
                    .join(", ")})`,
                }}
              />
              {/* Center circle */}
              <div className="absolute inset-6 rounded-full bg-white flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <Icon
                    icon="ph:smiley-bold"
                    className="w-8 h-8 text-green-500/40"
                  />
                  <p className="font-heading text-xs text-green-500 mt-1">
                    $CAPY
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Legend */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            {allocations.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-sky-100"
              >
                <div
                  className="w-5 h-5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans font-bold text-sm text-slate-800">
                      {item.label}
                    </span>
                    <span className="font-heading text-sm text-green-500">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-sky-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.value}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Token Details */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {tokenStats.slice(0, 4).map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-2xl bg-white shadow-sm border border-sky-100 text-center"
                >
                  <Icon
                    icon={stat.icon}
                    className="w-5 h-5 mx-auto text-green-500"
                  />
                  <p className="font-heading text-sm text-slate-800 mt-1">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 font-sans text-xs mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
