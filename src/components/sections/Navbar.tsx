import { useEffect, useState } from "react";
import { Ico, P } from "../ui/Icon";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["About", "Treatments", "Doctors", "Reviews", "Contact"];

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(250,248,244,0.97)"
          : "rgba(250,248,244,0.92)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 1px 20px rgba(11,37,69,0.10)" : "none",
        borderBottom: scrolled ? "1px solid #EAE6DD" : "1px solid transparent",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"
        style={{
          height: scrolled ? "60px" : "72px",
          transition: "height 0.3s ease",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => goto("hero")}
          className="flex items-center gap-3 shrink-0"
        >
          <div
            className="flex items-center justify-center rounded-xl"
            style={{ width: 38, height: 38, background: "#0B2545" }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A227"
              strokeWidth="2"
            >
              <path d={P.tooth} />
            </svg>
          </div>

          <div className="leading-tight">
            <div className="font-display font-800 text-[#0B2545] text-[15px] tracking-tight">
              Smile
            </div>
            <div className="text-[9px] font-600 tracking-[0.14em] uppercase text-[#2E7D6B]">
              Dental Care · Dhaka
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((n) => (
            <button
              key={n}
              onClick={() => goto(n.toLowerCase())}
              className="nav-link text-[13px] font-500 text-[#4A5E70] hover:text-[#0B2545] transition-colors pb-0.5"
            >
              {n}
            </button>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+8801711234567"
            className="hidden md:flex items-center gap-1.5 text-[13px] font-600 text-[#2E7D6B] hover:text-[#235F52] transition-colors"
          >
            <Ico d={P.phone} size={14} /> +880 1711-234567
          </a>

          <button
            onClick={() => goto("appointment")}
            className="hidden md:flex cta-gold items-center gap-2 text-[13px] font-700 text-[#0B2545] px-4 py-2.5 rounded-xl"
            style={{ boxShadow: "0 2px 12px rgba(201,162,39,0.25)" }}
          >
            <Ico d={P.cal} size={15} /> Book Appointment
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#EAE6DD] transition-colors text-[#0B2545]"
          >
            <Ico d={menuOpen ? P.x : P.menu} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{
          borderTop: "1px solid #EAE6DD",
          background: "rgba(250,248,244,0.98)",
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((n) => (
            <button
              key={n}
              onClick={() => goto(n.toLowerCase())}
              className="text-left py-3 px-3 rounded-xl text-[#1A2B3C] hover:bg-[#EAE6DD] font-500 text-sm transition-colors"
            >
              {n}
            </button>
          ))}

          <div className="mt-2 pt-3 border-t border-[#D9D3C8] flex flex-col gap-2">
            <a
              href="tel:+8801711234567"
              className="flex items-center gap-2 py-3 px-3 rounded-xl text-[#2E7D6B] font-600 text-sm"
            >
              <Ico d={P.phone} size={16} /> +880 1711-234567
            </a>

            <button
              onClick={() => goto("appointment")}
              className="cta-gold font-700 text-[#0B2545] py-3 rounded-xl text-sm text-center"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
