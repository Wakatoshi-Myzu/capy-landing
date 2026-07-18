import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "The Launch",
    status: "completed",
    phaseIcon: "ph:rocket-bold",
    items: [
      "Token creation & fair launch",
      "Liquidity pool on Raydium",
      "Website & social media launch",
      "Community building (Telegram, Twitter)",
    ],
  },
  {
    phase: "Phase 2",
    title: "The Growth",
    status: "in-progress",
    phaseIcon: "ph:seedling-bold",
    items: [
      "Dextools & CoinGecko listing",
      "Marketing partnerships",
      "Community giveaways",
      "5,000+ holders",
    ],
  },
  {
    phase: "Phase 3",
    title: "The Expansion",
    status: "upcoming",
    phaseIcon: "ph:chart-line-up-bold",
    items: [
      "CEX listings (MEXC, Gate.io)",
      "NFT collection drop",
      "Merch store launch",
      "10,000+ holders",
    ],
  },
  {
    phase: "Phase 4",
    title: "The Legacy",
    status: "upcoming",
    phaseIcon: "ph:star-bold",
    items: [
      "Capybara charity partnership",
      "DAO governance launch",
      "Cross-chain expansion",
      "Top 100 memecoin status",
    ],
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

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="section bg-img-white-section">
      <div className="page-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 font-sans font-bold text-xs px-3 py-1 rounded-full mb-4">
            <Icon icon="ph:map-trifold-bold" className="w-3.5 h-3.5" />
            Roadmap
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-slate-800 mb-4">
            The Capy
            <span className="text-green-500"> Journey</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm">
            From meme to mainstream. Here's the path we're paving together.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical dashed line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-200/50 -translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 md:space-y-12"
          >
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-amber-200 border-4 border-white shadow-sm z-10" />

                {/* Status badge */}
                <div className="md:hidden flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-green-600">
                    <>
                      <Icon
                        icon={
                          phase.status === "completed"
                            ? "ph:check-circle-bold"
                            : phase.status === "in-progress"
                              ? "ph:arrows-clockwise-bold"
                              : "ph:hourglass-bold"
                        }
                        className="w-3.5 h-3.5"
                      />
                      {phase.status === "completed"
                        ? " Done"
                        : phase.status === "in-progress"
                          ? " In Progress"
                          : " Upcoming"}
                    </>
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`roadmap-card p-5 sm:p-6 w-full ${
                    index % 2 === 0
                      ? "md:mr-[calc(50%+2rem)]"
                      : "md:ml-[calc(50%+2rem)]"
                  }`}
                >
                  <div className="hidden md:flex items-center gap-2 mb-3">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        phase.status === "completed"
                          ? "bg-green-500"
                          : phase.status === "in-progress"
                            ? "bg-amber-500"
                            : "bg-slate-300"
                      }`}
                    />
                    <span className="font-sans font-bold text-xs uppercase tracking-wider text-amber-700">
                      {phase.status === "completed"
                        ? "Completed"
                        : phase.status === "in-progress"
                          ? "In Progress"
                          : "Upcoming"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      icon={phase.phaseIcon}
                      className="w-6 h-6 text-amber-700"
                    />
                    <div>
                      <p className="font-sans font-bold text-xs text-amber-600 uppercase tracking-widest">
                        {phase.phase}
                      </p>
                      <h3 className="font-heading text-lg text-amber-900">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-slate-600 font-sans text-sm"
                      >
                        <span className="text-green-500 mt-0.5 shrink-0">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
