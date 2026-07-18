import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-img-footer-section border-t border-sky-100">
      <div className="page-wrap py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐹</span>
              <span className="font-heading text-xl text-slate-800">$CAPY</span>
            </Link>
            <p className="text-slate-500 text-sm font-sans leading-relaxed">
              The chillest coin in crypto. Community-owned, zero taxes, pure
              vibes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-slate-800 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Features", "Tokenomics", "Roadmap", "FAQ"].map(
                (label) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase()}`}
                      className="text-slate-500 hover:text-green-600 text-sm font-sans transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-heading text-slate-800 mb-3">Community</h4>
            <ul className="space-y-2">
              {[
                {
                  label: "Twitter / X",
                  icon: "ph:twitter-logo",
                  color: "text-sky-500",
                },
                {
                  label: "Telegram",
                  icon: "ph:chat-circle-bold",
                  color: "text-sky-500",
                },
                {
                  label: "Discord",
                  icon: "ph:game-controller-bold",
                  color: "text-indigo-500",
                },
                {
                  label: "Dextools",
                  icon: "ph:magnifying-glass-bold",
                  color: "text-amber-500",
                },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-500 hover:text-green-600 text-sm font-sans transition-colors"
                  >
                    <Icon icon={s.icon} className={`w-4 h-4 ${s.color}`} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-sans">
            &copy; {year} $CAPYCOIN. All rights reserved. Not financial advice.
          </p>
          <p className="text-slate-400 text-xs font-sans">
            Made with{" "}
            <Icon
              icon="ph:drop-bold"
              className="w-3.5 h-3.5 inline-block text-slate-400"
            />{" "}
            &amp;{" "}
            <Icon
              icon="ph:leaf-bold"
              className="w-3.5 h-3.5 inline-block text-green-500"
            />{" "}
            by the community
          </p>
        </div>
      </div>
    </footer>
  );
}
