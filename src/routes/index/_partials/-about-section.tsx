import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function AboutSection() {
  return (
    <section id="about" className="section bg-img-white-section">
      <div className="page-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 font-sans font-bold text-xs px-3 py-1 rounded-full mb-4">
              <Icon icon="ph:smiley-bold" className="w-3.5 h-3.5" />
              What is $CAPY?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-slate-800 mb-6 leading-tight">
              The Chillest
              <br />
              <span className="text-green-500">Meme Coin</span> on Solana
            </h2>
            <div className="space-y-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                $CAPYCOIN is a community-driven meme coin inspired by the
                world's most relaxed animal — the capybara. No presale, no
                taxes, just pure, unfiltered vibes.
              </p>
              <p>
                Our mission is simple: build the chillest community in crypto
                while making everyone smile. In a world of complex DeFi and
                stressful charts, $CAPY is your digital sanctuary.
              </p>
              <p>
                100% of the tokens were added to liquidity. The team burned
                their keys. This is a coin for the people, by the people.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "0%", label: "Tax", icon: null },
                { value: "100%", label: "Vibes", icon: null },
                { value: null, label: "LP Burned", icon: "ph:flame-bold" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-2xl bg-sky-50"
                >
                  <div className="font-heading text-xl sm:text-2xl text-green-500">
                    {stat.icon ? (
                      <Icon icon={stat.icon} className="w-6 h-6 mx-auto" />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-slate-500 font-sans text-xs font-semibold uppercase tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="wooden-sign h-[400px] wooden-sign-character p-8 sm:p-10 text-center relative overflow-hidden">
              <span className="absolute top-3 left-3 w-3 h-3 rounded-full bg-amber-800/30" />
              <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-amber-800/30" />
              <span className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-amber-800/30" />
              <span className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-amber-800/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
