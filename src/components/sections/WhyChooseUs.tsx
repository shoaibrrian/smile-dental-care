import Tag from "../ui/Tag";
import { FEATURES } from "../../data/content";

export default function WhyChooseUs() {
  return (
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
  );
}
