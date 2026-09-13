import { Ico, P } from "../ui/Icon";
import Stars from "../ui/Stars";
import Tag from "../ui/Tag";
import { REVIEWS } from "../../data/content";

export default function Reviews() {
  return (
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
              <div className="text-xs text-[#6B7C8E]">Based on 428 reviews</div>
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
  );
}
