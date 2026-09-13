import { Ico, P } from "../ui/Icon";
import Stars from "../ui/Stars";

type HeroProps = {
  goto: (id: string) => void;
};

export default function Hero({ goto }: HeroProps) {
  return (
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
            Expert, gentle dental care in Gulshan, Dhaka. From routine checkups
            to full-smile transformations — every visit is designed around your
            comfort and confidence.
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
              { val: "10+", sub: "Years Experience" },
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
              alt="Modern dental treatment room at Smile Dhaka"
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
  );
}
