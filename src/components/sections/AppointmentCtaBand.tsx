import { Ico, P } from "../ui/Icon";

type AppointmentCtaBandProps = {
  goto: (id: string) => void;
};

export default function AppointmentCtaBand({ goto }: AppointmentCtaBandProps) {
  return (
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
  );
}
