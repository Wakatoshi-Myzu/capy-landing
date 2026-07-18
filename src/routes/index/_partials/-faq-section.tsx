import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const faqs = [
  {
    q: "What is $CAPYCOIN?",
    a: "$CAPYCOIN is a community-driven meme coin on the Solana blockchain, inspired by the capybara — nature's chillest animal. No taxes, no presale, just vibes.",
  },
  {
    q: "How do I buy $CAPY?",
    a: "Download a Solana wallet (Phantom or Solflare), fund it with SOL, then swap for $CAPY on Raydium or Jupiter. Check our 'How to Buy' section for a step-by-step guide.",
  },
  {
    q: "Is there a tax on transactions?",
    a: "Zero. Nada. Zilch. There is 0% buy and sell tax. What you trade is what you get — no surprises.",
  },
  {
    q: "Was there a presale?",
    a: "No presale. $CAPY launched fair with no team allocation. Liquidity was added and the LP tokens were burned immediately.",
  },
  {
    q: "Is the contract renounced?",
    a: "Yes! The mint authority and freeze authority have been renounced. No one can mint new tokens or manipulate the supply.",
  },
  {
    q: "Where can I check the chart?",
    a: "You can view the $CAPY chart on Dexscreener, Birdeye, or DexTools. Just paste the contract address in the search bar.",
  },
  {
    q: "Is $CAPY a good investment?",
    a: "$CAPY is a meme coin with no financial promises. Invest only what you can afford to lose. We're here for the vibes, the community, and the capybaras.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-img-blue-section">
      <div className="page-wrap">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 font-sans font-bold text-xs px-3 py-1 rounded-full mb-4">
            <Icon icon="ph:question-bold" className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-slate-800 mb-4">
            Got Questions?
            <span className="text-green-500"> We Got Answers</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm">
            Everything you need to know about $CAPY, all in one place.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="faq-plank"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Icon
                    icon="ph:smiley-bold"
                    className="w-5 h-5 shrink-0 text-amber-700"
                  />
                  <h3 className="font-sans font-bold text-sm sm:text-base text-slate-800">
                    {faq.q}
                  </h3>
                </div>
                <Icon
                  icon={openIndex === index ? "ph:minus-bold" : "ph:plus-bold"}
                  className={`w-4 h-4 text-amber-700 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0 border-t border-amber-200/50">
                      <p className="text-slate-600 font-sans text-sm leading-relaxed mt-3">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-8"
        >
          <p className="text-slate-500 font-sans text-sm mb-4">
            Still have questions? Join our community!
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-sky-100 hover:bg-sky-200 text-slate-700 font-sans font-bold text-sm px-5 py-2.5 rounded-full transition-all"
            >
              <Icon icon="ph:twitter-logo" className="w-4 h-4" /> Twitter
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-sky-100 hover:bg-sky-200 text-slate-700 font-sans font-bold text-sm px-5 py-2.5 rounded-full transition-all"
            >
              <Icon icon="ph:chat-circle-bold" className="w-4 h-4" /> Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
