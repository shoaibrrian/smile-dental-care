import { Ico, P } from "../ui/Icon";

type FinalCtaProps = {
  goto: (id: string) => void;
};

export default function FinalCta({ goto }: FinalCtaProps) {
  return (
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
  );
}
