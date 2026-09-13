import { useState } from "react";
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
  };

  return (
    <div
      className="font-sans"
      style={{ background: "#FAF8F4", color: "#1A2B3C" }}
    >
      <Navbar />

      <Hero goto={goto} />

      <WhyChooseUs />

      <Treatments goto={goto} />

      <MeetTheDentist goto={goto} />

      <AppointmentCtaBand goto={goto} />

      <BeforeAfter />

      <Reviews />

      <AppointmentForm
        form={form}
        setForm={setForm}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />

      <Faq />

      <Location />

      <FinalCta goto={goto} />

      <Footer goto={goto} />

      <MobileStickyBar goto={goto} />
    </div>
  );
}
