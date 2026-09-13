import { Ico, P } from "../ui/Icon";
import Tag from "../ui/Tag";
import BACard from "../ui/BeforeAfterCard";
import { BA_CASES } from "../../data/content";

export default function BeforeAfter() {
  return (
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
  );
}
