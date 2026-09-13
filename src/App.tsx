import { useState, useEffect, useRef, useCallback } from "react";
import { Ico, P } from "./components/ui/Icon";
import Stars from "./components/ui/Stars";
import Tag from "./components/ui/Tag";
import BACard from "./components/ui/BeforeAfterCard";
import FAQ from "./components/ui/FaqItem";
import useReveal from "./components/hooks/useReveal";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Treatments from "./components/sections/Treatments";
import MeetTheDentist from "./components/sections/MeetTheDentist";
import AppointmentCtaBand from "./components/sections/AppointmentCtaBand";
import BeforeAfter from "./components/sections/BeforeAfter";
import Reviews from "./components/sections/Reviews";
import AppointmentForm from "./components/sections/AppointmentForm";
import Faq from "./components/sections/Faq";
import Location from "./components/sections/Location";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/sections/Footer";

/* ═══════════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════════ */
export default function App() {
  useReveal();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    date: "",
    time: "",
    msg: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  /* ─────────────────────────────────────────────────────── */
  return (
    <div
      className="font-sans"
      style={{ background: "#FAF8F4", color: "#1A2B3C" }}
    >
      {/* ══ NAVBAR ══════════════════════════════════════════ */}
      <Navbar />

      {/* ══ HERO ════════════════════════════════════════════ */}
      <Hero goto={goto} />

      {/* ══ WHY CHOOSE US ═══════════════════════════════════ */}
      <WhyChooseUs />

      {/* ══ TREATMENTS ══════════════════════════════════════ */}
      <Treatments goto={goto} />

      {/* ══ MEET THE DENTIST ════════════════════════════════ */}
      <MeetTheDentist goto={goto} />

      {/* ══ APPOINTMENT CTA BAND ════════════════════════════ */}
      <AppointmentCtaBand goto={goto} />

      {/* ══ BEFORE & AFTER ══════════════════════════════════ */}
      <BeforeAfter />

      {/* ══ REVIEWS ═════════════════════════════════════════ */}
      <Reviews />

      {/* ══ APPOINTMENT FORM ════════════════════════════════ */}
      <AppointmentForm
        form={form}
        setForm={setForm}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />

      {/* ══ FAQ ═════════════════════════════════════════════ */}
      <Faq />

      {/* ══ LOCATION ════════════════════════════════════════ */}
      <Location />

      {/* ══ FINAL CTA ═══════════════════════════════════════ */}
      <FinalCta goto={goto} />

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <Footer goto={goto} />

      {/* ══ MOBILE STICKY BAR ═══════════════════════════════ */}
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
    </div>
  );
}
