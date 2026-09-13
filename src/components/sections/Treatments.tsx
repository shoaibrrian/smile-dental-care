import { Ico, P } from "../ui/Icon";
import Tag from "../ui/Tag";
import { TREATMENTS } from "../../data/content";

type TreatmentsProps = {
  goto: (id: string) => void;
};

export default function Treatments({ goto }: TreatmentsProps) {
  return (
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
            Comprehensive dental solutions under one roof — from preventive care
            to complex restorations.
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
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#0B2545";
            }}
          >
            View All Treatments <Ico d={P.arrow} size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
