import { Ico, P } from "../ui/Icon";
import { TREATMENTS } from "../../data/content";

type FooterProps = {
  goto: (id: string) => void;
};

export default function Footer({ goto }: FooterProps) {
  return (
    <footer
      style={{ background: "#071A33", color: "white" }}
      className="pt-14 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "#142E58" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A227"
                  strokeWidth="2"
                >
                  <path d={P.tooth} />
                </svg>
              </div>
              <div>
                <div className="font-display font-800 text-white text-[15px]">
                  PerlaSmile
                </div>
                <div
                  className="text-[9px] font-600 tracking-widest uppercase"
                  style={{ color: "#2E7D6B" }}
                >
                  Dental Care · Dhaka
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "#5A7A99" }}
            >
              Trusted dental care in Gulshan, Dhaka since 2006. We believe
              everyone deserves a smile they're proud of.
            </p>

            <div className="flex gap-2.5">
              {[P.fb, P.ig, P.yt].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#142E58")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.07)")
                  }
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {(Array.isArray(icon) ? icon : [icon]).map((p, j) => (
                      <path key={j} d={p} />
                    ))}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-700 text-[11px] uppercase tracking-widest mb-4"
              style={{ color: "#2E7D6B" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Home",
                "About Us",
                "Treatments",
                "Our Doctors",
                "Patient Reviews",
                "Contact Us",
              ].map((l) => (
                <li key={l}>
                  <button
                    onClick={() => goto(l.split(" ")[0].toLowerCase())}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#5A7A99" }}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4
              className="font-700 text-[11px] uppercase tracking-widest mb-4"
              style={{ color: "#2E7D6B" }}
            >
              Treatments
            </h4>
            <ul className="flex flex-col gap-2">
              {TREATMENTS.map((t) => (
                <li key={t.name}>
                  <button
                    onClick={() => goto("treatments")}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#5A7A99" }}
                  >
                    {t.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-700 text-[11px] uppercase tracking-widest mb-4"
              style={{ color: "#2E7D6B" }}
            >
              Contact Us
            </h4>

            <div className="flex flex-col gap-3">
              {[
                {
                  icon: P.map,
                  text: "House 42, Road 11, Gulshan-2\nDhaka-1212, Bangladesh",
                },
                { icon: P.phone, text: "+880 1711-234567" },
                { icon: P.mail, text: "hello@perlasmile.com.bd" },
                { icon: P.clock, text: "Sat–Thu: 9 AM – 9 PM" },
              ].map((x) => (
                <div key={x.text} className="flex items-start gap-2.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E7D6B"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    {(Array.isArray(x.icon) ? x.icon : [x.icon]).map((p, i) => (
                      <path key={i} d={p} />
                    ))}
                  </svg>
                  <span
                    className="text-sm whitespace-pre-line leading-relaxed"
                    style={{ color: "#5A7A99" }}
                  >
                    {x.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px]" style={{ color: "#3A5A75" }}>
            © 2026 PerlaSmile Dental Care, Dhaka. All rights reserved.
          </p>
          <p className="text-[12px]" style={{ color: "#3A5A75" }}>
            Reg. No. BMDC-DH-2006-0342 · DGDA Licensed
          </p>
        </div>
      </div>
    </footer>
  );
}
