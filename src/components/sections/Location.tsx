import { Ico, P } from "../ui/Icon";
import Tag from "../ui/Tag";

export default function Location() {
  return (
    <section id="contact" className="py-20" style={{ background: "#F3F0EA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <Tag text="Find Us" />
          <h2
            className="font-display font-700 mt-3 text-[#0B2545]"
            style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
          >
            Clinic Location
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map */}
          <div
            className="lg:col-span-3 reveal-left rounded-2xl overflow-hidden border"
            style={{
              height: 380,
              borderColor: "#D9D3C8",
              background: "#EAE6DD",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8!2d90.4152!3d23.7924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzMyLjYiTiA5MMKwMjQnNTQuNyJF!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PerlaSmile Dental Clinic — Gulshan-2, Dhaka"
            />
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 reveal-right flex flex-col gap-3">
            {[
              {
                icon: P.map,
                label: "Address",
                val: "House 42, Road 11, Gulshan-2\nDhaka-1212, Bangladesh",
              },
              {
                icon: "M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z",
                label: "Landmark",
                val: "Near Gulshan-2 DCC Market, opposite Jamuna Bank",
              },
              {
                icon: P.clock,
                label: "Hours",
                val: "Sat–Thu: 9:00 AM – 9:00 PM\nFri: 3:00 PM – 8:00 PM",
              },
              {
                icon: P.phone,
                label: "Phone",
                val: "+880 1711-234567\n+880 2-9884-5678",
              },
            ].map((x) => (
              <div
                key={x.label}
                className="flex gap-4 rounded-2xl p-4 border"
                style={{ background: "white", borderColor: "#EAE6DD" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#F0EDE6" }}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B2545"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {(Array.isArray(x.icon) ? x.icon : [x.icon]).map((p, i) => (
                      <path key={i} d={p} />
                    ))}
                  </svg>
                </div>
                <div>
                  <div
                    className="text-[10px] font-700 uppercase tracking-widest mb-0.5"
                    style={{ color: "#6B7C8E" }}
                  >
                    {x.label}
                  </div>
                  <div
                    className="text-sm font-500 whitespace-pre-line"
                    style={{ color: "#1A2B3C" }}
                  >
                    {x.val}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-1">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 cta-emerald flex items-center justify-center gap-2 font-600 text-white py-3 rounded-xl text-sm"
              >
                <Ico d={P.map} size={15} /> Get Directions
              </a>
              <a
                href="https://wa.me/8801711234567"
                className="flex-1 flex items-center justify-center gap-2 font-600 text-white py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{ background: "#25D366" }}
              >
                <Ico d={P.whatsapp} size={15} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
