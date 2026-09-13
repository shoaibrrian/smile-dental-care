import { useState, useEffect, useRef, useCallback } from "react";
import { Ico, P } from "./components/ui/Icon";
import Stars from "./components/ui/Stars";
import Tag from "./components/ui/Tag";
import BACard from "./components/ui/BeforeAfterCard";
import FAQ from "./components/ui/FaqItem";
import useReveal from "./components/hooks/useReveal";
import { TREATMENTS, FEATURES, REVIEWS, FAQS, BA_CASES } from "./data/content";
import Navbar from "./components/sections/Navbar";

/* ═══════════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════════ */
export default function App() {
  useReveal();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    date: "",
    time: "",
    msg: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  /* ─────────────────────────────────────────────────────── */
  return (
    <div
      className="font-sans"
      style={{ background: "#FAF8F4", color: "#1A2B3C" }}
    >
      {/* ══ NAVBAR ══════════════════════════════════════════ */}
      <Navbar />

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          background:
            "linear-gradient(135deg, #0B2545 0%, #142E58 55%, #1A3D6B 100%)",
          paddingTop: "72px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="reveal-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7 text-xs font-600"
              style={{
                background: "rgba(201,162,39,0.15)",
                color: "#E8C046",
                border: "1px solid rgba(201,162,39,0.3)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse"></span>
              Dhaka's Most Trusted Private Dental Clinic
            </div>

            <h1
              className="font-display font-800 leading-[1.1] mb-5"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                color: "#F5F2EC",
              }}
            >
              Your Smile
              <br />
              <span style={{ color: "#C9A227" }}>Deserves the</span>
              <br />
              <span style={{ color: "#C9A227" }}>Best Care.</span>
            </h1>

            <p
              className="text-[15px] leading-relaxed mb-9 max-w-md"
              style={{ color: "#A8BDD0" }}
            >
              Expert, gentle dental care in Gulshan, Dhaka. From routine
              checkups to full-smile transformations — every visit is designed
              around your comfort and confidence.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => goto("appointment")}
                className="cta-gold flex items-center gap-2 font-700 text-[#0B2545] px-6 py-3.5 rounded-xl text-sm"
                style={{ boxShadow: "0 6px 28px rgba(201,162,39,0.4)" }}
              >
                <Ico d={P.cal} size={17} /> Book Appointment
              </button>
              <a
                href="https://wa.me/8801711234567"
                className="cta-emerald flex items-center gap-2 font-700 text-white px-6 py-3.5 rounded-xl text-sm"
              >
                <Ico d={P.whatsapp} size={17} /> WhatsApp
              </a>
              <a
                href="tel:+8801711234567"
                className="flex items-center gap-2 font-600 text-sm px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "#C8D9E8",
                  background: "rgba(255,255,255,0.07)",
                }}
              >
                <Ico d={P.phone} size={17} /> Call Now
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              {[
                { val: "18+", sub: "Years Experience" },
                { val: "8,000+", sub: "Happy Patients" },
                { val: "4.9 ★", sub: "Google Rating", gold: true },
              ].map((t) => (
                <div key={t.sub}>
                  <div
                    className={`font-display font-800 text-2xl leading-none ${t.gold ? "text-[#C9A227]" : "text-white"}`}
                  >
                    {t.val}
                  </div>
                  <div
                    className="text-xs font-500 mt-1"
                    style={{ color: "#7EA3C0" }}
                  >
                    {t.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="reveal-right relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at center, #2E7D6B, transparent 70%)",
              }}
            />
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ background: "#142E58" }}
            >
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=720&h=580&fit=crop&auto=format"
                alt="Modern dental treatment room at PerlaSmile Dhaka"
                className="w-full object-cover"
                style={{ height: 480 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,37,69,0.55) 0%, transparent 55%)",
                }}
              />
              {/* floating card */}
              <div
                className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl p-4"
                style={{
                  background: "rgba(250,248,244,0.96)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 8px 32px rgba(11,37,69,0.2)",
                }}
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "#EAE6DD" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B2545"
                    strokeWidth="1.75"
                  >
                    <path d={P.tooth} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-700 text-sm text-[#0B2545]">
                    Dr. Fahmida Rahman
                  </div>
                  <div className="text-xs text-[#6B7C8E] truncate">
                    BDS, MDS (Prosthodontics) · 18 Yrs
                  </div>
                </div>
                <Stars n={5} size={12} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ═══════════════════════════════════ */}
      <section id="about" className="py-20" style={{ background: "#FAF8F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <Tag text="Why Choose Us" />
            <h2
              className="font-display font-700 mt-3 text-[#0B2545]"
              style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
            >
              Care You Can Genuinely Trust
            </h2>
            <p className="mt-3 text-[#6B7C8E] max-w-xl mx-auto text-sm leading-relaxed">
              We combine clinical excellence with genuine warmth — because
              world-class dentistry should also feel human.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="reveal card-lift group rounded-2xl p-6 border cursor-default"
                style={{ background: "white", borderColor: "#EAE6DD" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200"
                  style={{ background: "#F0EDE6" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#0B2545")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#F0EDE6")
                  }
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0B2545] group-hover:text-[#C9A227] transition-colors duration-200"
                  >
                    {(Array.isArray(f.icon) ? f.icon : [f.icon]).map((p, i) => (
                      <path key={i} d={p} />
                    ))}
                  </svg>
                </div>
                <h3 className="font-700 text-[#0B2545] mb-1.5 text-sm">
                  {f.title}
                </h3>
                <p className="text-[13px] text-[#6B7C8E] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TREATMENTS ══════════════════════════════════════ */}
      <section
        id="treatments"
        className="py-20"
        style={{ background: "#F3F0EA" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <Tag text="Our Services" />
            <h2
              className="font-display font-700 mt-3 text-[#0B2545]"
              style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
            >
              Treatments We Offer
            </h2>
            <p className="mt-3 text-[#6B7C8E] max-w-xl mx-auto text-sm leading-relaxed">
              Comprehensive dental solutions under one roof — from preventive
              care to complex restorations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 stagger">
            {TREATMENTS.map((t) => (
              <div
                key={t.name}
                className="treat-card reveal group rounded-2xl p-5 text-center cursor-pointer border"
                style={{ background: "white", borderColor: "#EAE6DD" }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: "#F0EDE6" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="treat-icon text-[#2E7D6B] transition-colors duration-200"
                  >
                    {(Array.isArray(t.icon) ? t.icon : [t.icon]).map((p, i) => (
                      <path key={i} d={p} />
                    ))}
                  </svg>
                </div>
                <span className="treat-name text-sm font-600 text-[#0B2545] leading-tight block transition-colors duration-200">
                  {t.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <button
              onClick={() => goto("appointment")}
              className="inline-flex items-center gap-2 font-600 text-sm px-6 py-3 rounded-xl border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: "#0B2545", color: "#0B2545" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0B2545";
                (e.currentTarget as HTMLElement).style.color = "#FAF8F4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "#0B2545";
              }}
            >
              View All Treatments <Ico d={P.arrow} size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* ══ MEET THE DENTIST ════════════════════════════════ */}
      <section id="doctors" className="py-20" style={{ background: "#FAF8F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <Tag text="Our Team" />
            <h2
              className="font-display font-700 mt-3 text-[#0B2545]"
              style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
            >
              Meet Your Dentist
            </h2>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #0B2545 0%, #142E58 100%)",
            }}
          >
            {/* photo */}
            <div className="reveal-left relative">
              <div
                className="absolute -inset-2 rounded-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse, #2E7D6B, transparent 70%)",
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: "#142E58" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?w=620&h=680&fit=crop&auto=format&crop=faces,top"
                  alt="Dr. Fahmida Rahman — Lead Dentist at PerlaSmile"
                  className="w-full object-cover object-top"
                  style={{ height: 460 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,37,69,0.5) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>

            {/* details */}
            <div className="reveal-right">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-600"
                style={{
                  background: "rgba(201,162,39,0.18)",
                  color: "#E8C046",
                  border: "1px solid rgba(201,162,39,0.3)",
                }}
              >
                Lead Dentist &amp; Founder
              </div>
              <h3
                className="font-display font-800 text-white mb-1"
                style={{ fontSize: "1.9rem" }}
              >
                Dr. Fahmida Rahman
              </h3>
              <p className="text-[#7EA3C0] font-500 mb-6 text-sm">
                BDS (BSMMU), MDS – Prosthodontics (BUHS) · Fellow, ICOI
              </p>

              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  { l: "Experience", v: "18+ Years" },
                  { l: "Specialization", v: "Prosthodontics" },
                  { l: "Cases Completed", v: "14,000+" },
                  { l: "Patient Rating", v: "4.9 / 5.0 ★" },
                ].map((x) => (
                  <div
                    key={x.l}
                    className="rounded-xl p-3.5 border"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      borderColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    <div
                      className="text-xs font-500"
                      style={{ color: "#7EA3C0" }}
                    >
                      {x.l}
                    </div>
                    <div className="font-700 text-white text-sm mt-0.5">
                      {x.v}
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="text-[13px] leading-relaxed mb-7"
                style={{ color: "#A8BDD0" }}
              >
                Dr. Rahman is a highly qualified prosthodontist with 18 years of
                experience transforming smiles across Dhaka. She specialises in
                full-mouth rehabilitation, dental implants, and aesthetic
                dentistry. Her patient-first philosophy and gentle technique
                have earned the trust of over 8,000 families.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => goto("appointment")}
                  className="cta-gold flex items-center gap-2 font-700 text-[#0B2545] px-5 py-2.5 rounded-xl text-sm"
                >
                  Book with Dr. Rahman
                </button>
                <button
                  className="flex items-center gap-2 font-600 text-sm px-5 py-2.5 rounded-xl border transition-all hover:-translate-y-0.5"
                  style={{
                    borderColor: "rgba(255,255,255,0.25)",
                    color: "white",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  View Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ APPOINTMENT CTA BAND ════════════════════════════ */}
      <section className="py-16" style={{ background: "#2E7D6B" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center reveal">
          <h2
            className="font-display font-800 text-white mb-3"
            style={{ fontSize: "clamp(1.7rem,3.5vw,2.6rem)" }}
          >
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#A3D4CA] mb-8 text-base">
            Same-day appointments available. Call, WhatsApp, or book online — we
            will confirm within 2 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => goto("appointment")}
              className="cta-gold flex items-center gap-2 font-700 text-[#0B2545] px-6 py-3.5 rounded-xl text-sm"
              style={{ boxShadow: "0 6px 24px rgba(201,162,39,0.4)" }}
            >
              <Ico d={P.cal} size={17} /> Book Appointment
            </button>
            <a
              href="https://wa.me/8801711234567"
              className="flex items-center gap-2 font-700 text-white px-6 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "#25D366",
                boxShadow: "0 6px 24px rgba(37,211,102,0.3)",
              }}
            >
              <Ico d={P.whatsapp} size={17} /> WhatsApp: +880 1711-234567
            </a>
            <a
              href="tel:+8801711234567"
              className="flex items-center gap-2 font-600 text-white px-6 py-3.5 rounded-xl text-sm border-2 transition-all hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              <Ico d={P.phone} size={17} /> +880 1711-234567
            </a>
          </div>
        </div>
      </section>

      {/* ══ BEFORE & AFTER ══════════════════════════════════ */}
      <section className="py-20" style={{ background: "#F3F0EA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <Tag text="Real Results" />
            <h2
              className="font-display font-700 mt-3 text-[#0B2545]"
              style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
            >
              Before &amp; After
            </h2>
            <p className="mt-3 text-[#6B7C8E] max-w-lg mx-auto text-sm leading-relaxed">
              Drag the handle left or right to see the transformation our
              treatments deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {BA_CASES.map((c) => (
              <div key={c.label} className="reveal">
                <BACard {...c} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <button className="cta-emerald inline-flex items-center gap-2 font-600 text-white text-sm px-6 py-3 rounded-xl">
              View Full Gallery <Ico d={P.arrow} size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ═════════════════════════════════════════ */}
      <section id="reviews" className="py-20" style={{ background: "#FAF8F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <Tag text="Patient Stories" />
            <h2
              className="font-display font-700 mt-3 text-[#0B2545]"
              style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
            >
              What Our Patients Say
            </h2>

            {/* Big Google rating */}
            <div
              className="inline-flex items-center gap-5 mt-7 rounded-2xl px-7 py-4 border"
              style={{
                background: "white",
                borderColor: "#EAE6DD",
                boxShadow: "0 2px 16px rgba(11,37,69,0.06)",
              }}
            >
              <div className="text-right">
                <div className="font-display font-900 text-[3.2rem] leading-none text-[#0B2545]">
                  4.9
                </div>
                <div className="text-xs text-[#6B7C8E] mt-1">Google Rating</div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Stars n={5} size={20} />
                <div className="text-xs text-[#6B7C8E]">
                  Based on 428 reviews
                </div>
              </div>
              <div className="pl-4 border-l border-[#D9D3C8]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-700"
                  style={{ background: "#4285F4", color: "white" }}
                >
                  G
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="reveal card-lift rounded-2xl p-5 border"
                style={{ background: "white", borderColor: "#EAE6DD" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-700 text-white shrink-0"
                      style={{ background: "#0B2545" }}
                    >
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-600 text-[13px] text-[#0B2545]">
                        {r.name}
                      </div>
                      <div className="text-[11px] text-[#6B7C8E]">{r.date}</div>
                    </div>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-700 text-white shrink-0"
                    style={{ background: "#4285F4" }}
                  >
                    G
                  </div>
                </div>
                <Stars n={r.stars} size={13} />
                <p className="text-[13px] text-[#4A5E70] leading-relaxed mt-2">
                  {r.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-600 text-sm px-6 py-3 rounded-xl border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: "#D9D3C8", color: "#1A2B3C" }}
            >
              View All Google Reviews <Ico d={P.arrow} size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ══ APPOINTMENT FORM ════════════════════════════════ */}
      <section
        id="appointment"
        className="py-20"
        style={{ background: "#0B2545" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 reveal">
            <Tag text="Get Started" />
            <h2
              className="font-display font-800 text-white mt-3"
              style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
            >
              Book Your Appointment
            </h2>
            <p className="mt-3 text-sm" style={{ color: "#7EA3C0" }}>
              Fill in your details and we will confirm your slot within 2 hours.
              No card required.
            </p>
          </div>

          {submitted ? (
            <div
              className="reveal rounded-3xl p-10 text-center border"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-[#2E7D6B]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-display font-700 text-white text-xl mb-2">
                Request Received!
              </h3>
              <p style={{ color: "#7EA3C0" }} className="text-sm">
                We will call or WhatsApp you within 2 hours to confirm your
                appointment.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 cta-gold font-600 text-[#0B2545] px-6 py-2.5 rounded-xl text-sm"
              >
                Book Another
              </button>
            </div>
          ) : (
            <div
              className="reveal rounded-3xl p-8 md:p-10 border"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                    style={{ color: "#7EA3C0" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Farhan Hossain"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1.5px solid rgba(255,255,255,0.14)",
                      color: "white",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#C9A227")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.14)")
                    }
                  />
                </div>
                {/* Phone */}
                <div>
                  <label
                    className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                    style={{ color: "#7EA3C0" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1.5px solid rgba(255,255,255,0.14)",
                      color: "white",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#C9A227")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.14)")
                    }
                  />
                </div>
                {/* Treatment */}
                <div>
                  <label
                    className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                    style={{ color: "#7EA3C0" }}
                  >
                    Treatment
                  </label>
                  <select
                    value={form.treatment}
                    onChange={(e) =>
                      setForm({ ...form, treatment: e.target.value })
                    }
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all appearance-none"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1.5px solid rgba(255,255,255,0.14)",
                      color: form.treatment ? "white" : "#7EA3C0",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#C9A227")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.14)")
                    }
                  >
                    <option value="" style={{ background: "#0B2545" }}>
                      Select Treatment
                    </option>
                    {TREATMENTS.map((t) => (
                      <option
                        key={t.name}
                        value={t.name}
                        style={{ background: "#0B2545" }}
                      >
                        {t.name}
                      </option>
                    ))}
                    <option value="general" style={{ background: "#0B2545" }}>
                      General Checkup
                    </option>
                    <option value="other" style={{ background: "#0B2545" }}>
                      Other / Not Sure
                    </option>
                  </select>
                </div>
                {/* Date */}
                <div>
                  <label
                    className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                    style={{ color: "#7EA3C0" }}
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1.5px solid rgba(255,255,255,0.14)",
                      color: "white",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#C9A227")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.14)")
                    }
                  />
                </div>
                {/* Time slots */}
                <div className="sm:col-span-2">
                  <label
                    className="block text-xs font-600 mb-2 uppercase tracking-wider"
                    style={{ color: "#7EA3C0" }}
                  >
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {[
                      "9:00 AM",
                      "11:00 AM",
                      "1:00 PM",
                      "3:00 PM",
                      "5:00 PM",
                      "7:00 PM",
                    ].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, time: t })}
                        className="py-2 rounded-xl text-xs font-600 border transition-all"
                        style={
                          form.time === t
                            ? {
                                background: "#C9A227",
                                borderColor: "#C9A227",
                                color: "#0B2545",
                              }
                            : {
                                background: "rgba(255,255,255,0.07)",
                                borderColor: "rgba(255,255,255,0.15)",
                                color: "#A8BDD0",
                              }
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                    style={{ color: "#7EA3C0" }}
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your concern or any special requirements..."
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1.5px solid rgba(255,255,255,0.14)",
                      color: "white",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#C9A227")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.14)")
                    }
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  if (form.name && form.phone) setSubmitted(true);
                }}
                className="w-full mt-6 cta-gold font-700 text-[#0B2545] py-4 rounded-xl text-base"
                style={{ boxShadow: "0 6px 28px rgba(201,162,39,0.4)" }}
              >
                Confirm Appointment →
              </button>
              <p
                className="text-center text-xs mt-3"
                style={{ color: "#4A6A85" }}
              >
                Or call directly:{" "}
                <a
                  href="tel:+8801711234567"
                  className="text-[#C9A227] font-600"
                >
                  +880 1711-234567
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#FAF8F4" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 reveal">
            <Tag text="FAQ" />
            <h2
              className="font-display font-700 mt-3 text-[#0B2545]"
              style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
            >
              Common Questions
            </h2>
            <p className="mt-3 text-[#6B7C8E] text-sm">
              Everything you need to know before your first visit.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((f) => (
              <div key={f.q} className="reveal">
                <FAQ q={f.q} a={f.a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOCATION ════════════════════════════════════════ */}
      <section id="contact" className="py-20" style={{ background: "#F3F0EA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <Tag text="Find Us" />
            <h2
              className="font-display font-700 mt-3 text-[#0B2545]"
              style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
            >
              Clinic Location
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Map */}
            <div
              className="lg:col-span-3 reveal-left rounded-2xl overflow-hidden border"
              style={{
                height: 380,
                borderColor: "#D9D3C8",
                background: "#EAE6DD",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8!2d90.4152!3d23.7924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzMyLjYiTiA5MMKwMjQnNTQuNyJF!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PerlaSmile Dental Clinic — Gulshan-2, Dhaka"
              />
            </div>

            {/* Info cards */}
            <div className="lg:col-span-2 reveal-right flex flex-col gap-3">
              {[
                {
                  icon: P.map,
                  label: "Address",
                  val: "House 42, Road 11, Gulshan-2\nDhaka-1212, Bangladesh",
                },
                {
                  icon: "M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z",
                  label: "Landmark",
                  val: "Near Gulshan-2 DCC Market, opposite Jamuna Bank",
                },
                {
                  icon: P.clock,
                  label: "Hours",
                  val: "Sat–Thu: 9:00 AM – 9:00 PM\nFri: 3:00 PM – 8:00 PM",
                },
                {
                  icon: P.phone,
                  label: "Phone",
                  val: "+880 1711-234567\n+880 2-9884-5678",
                },
              ].map((x) => (
                <div
                  key={x.label}
                  className="flex gap-4 rounded-2xl p-4 border"
                  style={{ background: "white", borderColor: "#EAE6DD" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "#F0EDE6" }}
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0B2545"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {(Array.isArray(x.icon) ? x.icon : [x.icon]).map(
                        (p, i) => (
                          <path key={i} d={p} />
                        ),
                      )}
                    </svg>
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-700 uppercase tracking-widest mb-0.5"
                      style={{ color: "#6B7C8E" }}
                    >
                      {x.label}
                    </div>
                    <div
                      className="text-sm font-500 whitespace-pre-line"
                      style={{ color: "#1A2B3C" }}
                    >
                      {x.val}
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 mt-1">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 cta-emerald flex items-center justify-center gap-2 font-600 text-white py-3 rounded-xl text-sm"
                >
                  <Ico d={P.map} size={15} /> Get Directions
                </a>
                <a
                  href="https://wa.me/8801711234567"
                  className="flex-1 flex items-center justify-center gap-2 font-600 text-white py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: "#25D366" }}
                >
                  <Ico d={P.whatsapp} size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═══════════════════════════════════════ */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, #071A33 0%, #0B2545 50%, #142E58 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center reveal">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-7"
            style={{
              background: "rgba(201,162,39,0.15)",
              border: "1px solid rgba(201,162,39,0.3)",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A227"
              strokeWidth="1.75"
            >
              {(Array.isArray(P.smile) ? P.smile : [P.smile]).map((p, i) => (
                <path key={i} d={p} />
              ))}
            </svg>
          </div>
          <h2
            className="font-display font-800 text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)" }}
          >
            Take the First Step Towards
            <br />
            <span style={{ color: "#C9A227" }}>Your Most Confident Smile.</span>
          </h2>
          <p
            className="mb-10 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "#7EA3C0" }}
          >
            Hundreds of families in Dhaka have already transformed their dental
            health with us. Your journey begins with a single message or call.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => goto("appointment")}
              className="cta-gold flex items-center gap-2 font-700 text-[#0B2545] px-7 py-4 rounded-xl text-base"
              style={{ boxShadow: "0 8px 32px rgba(201,162,39,0.45)" }}
            >
              <Ico d={P.cal} size={20} /> Book Appointment
            </button>
            <a
              href="tel:+8801711234567"
              className="flex items-center gap-2 font-700 text-white px-7 py-4 rounded-xl text-base border-2 transition-all hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.07)",
              }}
            >
              <Ico d={P.phone} size={20} /> Call Now
            </a>
            <a
              href="https://wa.me/8801711234567"
              className="flex items-center gap-2 font-700 text-white px-7 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5"
              style={{
                background: "#25D366",
                boxShadow: "0 8px 32px rgba(37,211,102,0.3)",
              }}
            >
              <Ico d={P.whatsapp} size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <footer
        style={{ background: "#071A33", color: "white" }}
        className="pt-14 pb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "#142E58" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A227"
                    strokeWidth="2"
                  >
                    <path d={P.tooth} />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-800 text-white text-[15px]">
                    PerlaSmile
                  </div>
                  <div
                    className="text-[9px] font-600 tracking-widest uppercase"
                    style={{ color: "#2E7D6B" }}
                  >
                    Dental Care · Dhaka
                  </div>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#5A7A99" }}
              >
                Trusted dental care in Gulshan, Dhaka since 2006. We believe
                everyone deserves a smile they're proud of.
              </p>
              <div className="flex gap-2.5">
                {[P.fb, P.ig, P.yt].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#142E58")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.07)")
                    }
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {(Array.isArray(icon) ? icon : [icon]).map((p, j) => (
                        <path key={j} d={p} />
                      ))}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4
                className="font-700 text-[11px] uppercase tracking-widest mb-4"
                style={{ color: "#2E7D6B" }}
              >
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Home",
                  "About Us",
                  "Treatments",
                  "Our Doctors",
                  "Patient Reviews",
                  "Contact Us",
                ].map((l) => (
                  <li key={l}>
                    <button
                      onClick={() => goto(l.split(" ")[0].toLowerCase())}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "#5A7A99" }}
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div>
              <h4
                className="font-700 text-[11px] uppercase tracking-widest mb-4"
                style={{ color: "#2E7D6B" }}
              >
                Treatments
              </h4>
              <ul className="flex flex-col gap-2">
                {TREATMENTS.map((t) => (
                  <li key={t.name}>
                    <button
                      onClick={() => goto("treatments")}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "#5A7A99" }}
                    >
                      {t.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="font-700 text-[11px] uppercase tracking-widest mb-4"
                style={{ color: "#2E7D6B" }}
              >
                Contact Us
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: P.map,
                    text: "House 42, Road 11, Gulshan-2\nDhaka-1212, Bangladesh",
                  },
                  { icon: P.phone, text: "+880 1711-234567" },
                  { icon: P.mail, text: "hello@perlasmile.com.bd" },
                  { icon: P.clock, text: "Sat–Thu: 9 AM – 9 PM" },
                ].map((x) => (
                  <div key={x.text} className="flex items-start gap-2.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2E7D6B"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      {(Array.isArray(x.icon) ? x.icon : [x.icon]).map(
                        (p, i) => (
                          <path key={i} d={p} />
                        ),
                      )}
                    </svg>
                    <span
                      className="text-sm whitespace-pre-line leading-relaxed"
                      style={{ color: "#5A7A99" }}
                    >
                      {x.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px]" style={{ color: "#3A5A75" }}>
              © 2026 PerlaSmile Dental Care, Dhaka. All rights reserved.
            </p>
            <p className="text-[12px]" style={{ color: "#3A5A75" }}>
              Reg. No. BMDC-DH-2006-0342 · DGDA Licensed
            </p>
          </div>
        </div>
      </footer>

      {/* ══ MOBILE STICKY BAR ═══════════════════════════════ */}
      <div
        className="fixed bottom-0 inset-x-0 z-40 md:hidden flex gap-2 px-3 py-2.5"
        style={{
          background: "rgba(250,248,244,0.97)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid #EAE6DD",
          boxShadow: "0 -4px 24px rgba(11,37,69,0.10)",
        }}
      >
        <a
          href="tel:+8801711234567"
          className="flex-1 flex items-center justify-center gap-1.5 font-600 text-sm py-3 rounded-xl transition-colors"
          style={{ background: "#EBF4FF", color: "#0B2545" }}
        >
          <Ico d={P.phone} size={16} /> Call
        </a>
        <a
          href="https://wa.me/8801711234567"
          className="flex-1 flex items-center justify-center gap-1.5 font-600 text-sm py-3 rounded-xl"
          style={{ background: "#E6F8ED", color: "#1A7A3C" }}
        >
          <Ico d={P.whatsapp} size={16} /> WhatsApp
        </a>
        <button
          onClick={() => goto("appointment")}
          className="cta-gold flex-[1.5] flex items-center justify-center gap-1.5 font-700 text-[#0B2545] py-3 px-3 rounded-xl text-sm"
        >
          <Ico d={P.cal} size={16} /> Book Now
        </button>
      </div>
    </div>
  );
}
