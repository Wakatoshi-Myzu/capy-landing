import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleCopy = () => {
    navigator.clipboard.writeText("7xKXQtBmT1zYqW5Kj3mN8pL9cR2fV4nA6dE");
  };

  return (
    <section className="bg-sky-50 bg-img-blue-section section min-h-screen flex items-center pt-20 md:pt-24">
      <div className="page-wrap w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-sans font-bold text-xs px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live on Solana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-800 leading-tight mb-4"
          >
            THE CHILLEST
            <br />
            COIN IN <span className="text-green-500">CRYPTO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 font-sans text-base md:text-lg max-w-xl mx-auto mb-8"
          >
            No taxes, no promises, just vibes. Welcome to the capybara
            revolution.{" "}
            <Icon icon="ph:smiley-bold" className="w-5 h-5 inline-block" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 max-w-lg mx-auto bg-white rounded-full shadow-md border border-sky-100 p-1.5 mb-6"
          >
            <div className="flex-1 truncate pl-4 font-mono text-xs sm:text-sm text-slate-700">
              7xKXQtBmT1zYqW5Kj3mN8pL9cR2fV4nA6dE
            </div>
            <button
              onClick={handleCopy}
              className="bg-green-500 hover:bg-green-600 text-white font-sans font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 shrink-0"
            >
              <Icon icon="ph:copy-bold" className="w-3.5 h-3.5" />
              Copy CA
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-400 text-xs font-sans mb-10"
          >
            Click to copy the contract address
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <video autoPlay loop muted playsInline className="mascot-video">
            <source
              src="/videos/e1f8b0cf-1d2b-4647-b874-04a03351362e.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
