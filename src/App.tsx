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
import MobileStickyBar from "./components/sections/MobileStickyBar";

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
      <MobileStickyBar goto={goto} />
    </div>
  );
}
