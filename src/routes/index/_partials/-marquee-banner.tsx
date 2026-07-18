import { Icon } from "@iconify/react";

const marqueeItems = [
  { text: "$CAPY", icon: null },
  { text: "CAPYCOIN", icon: "ph:smiley-bold" },
  { text: "CHILLEST COIN", icon: null },
  { text: "NO TAXES", icon: "ph:smiley-bold" },
  { text: "$CAPY", icon: null },
  { text: "TO THE MOON", icon: "ph:smiley-bold" },
];

export default function MarqueeBanner() {
  return (
    <div className="bg-green-500 border-y-2 border-green-600 overflow-hidden py-3">
      <div className="marquee-track">
        {/* Group 1 */}
        <div className="flex items-center gap-0 shrink-0">
          {marqueeItems.map((item, i) => (
            <span
              key={`g1-${i}`}
              className="text-white font-heading text-sm sm:text-base uppercase tracking-widest whitespace-nowrap px-4 inline-flex items-center gap-1.5"
            >
              {item.icon && <Icon icon={item.icon} className="w-4 h-4" />}
              {item.text} •
            </span>
          ))}
        </div>
        {/* Group 2 (duplicate for seamless loop) */}
        <div className="flex items-center gap-0 shrink-0">
          {marqueeItems.map((item, i) => (
            <span
              key={`g2-${i}`}
              className="text-white font-heading text-sm sm:text-base uppercase tracking-widest whitespace-nowrap px-4 inline-flex items-center gap-1.5"
            >
              {item.icon && <Icon icon={item.icon} className="w-4 h-4" />}
              {item.text} •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
