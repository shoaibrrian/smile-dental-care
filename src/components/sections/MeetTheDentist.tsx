import Tag from "../ui/Tag";

type MeetTheDentistProps = {
  goto: (id: string) => void;
};

export default function MeetTheDentist({ goto }: MeetTheDentistProps) {
  return (
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
              dentistry. Her patient-first philosophy and gentle technique have
              earned the trust of over 8,000 families.
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
  );
}
