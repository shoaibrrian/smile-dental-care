import { Ico, P } from "../ui/Icon";

type MobileStickyBarProps = {
  goto: (id: string) => void;
};

export default function MobileStickyBar({ goto }: MobileStickyBarProps) {
  return (
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
  );
}
