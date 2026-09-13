import Tag from "../ui/Tag";
import FAQ from "../ui/FaqItem";
import { FAQS } from "../../data/content";

export default function Faq() {
  return (
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
  );
}
