import Tag from "../ui/Tag";
import { TREATMENTS } from "../../data/content";

type AppointmentFormProps = {
  form: {
    name: string;
    phone: string;
    treatment: string;
    date: string;
    time: string;
    msg: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      phone: string;
      treatment: string;
      date: string;
      time: string;
      msg: string;
    }>
  >;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppointmentForm({
  form,
  setForm,
  submitted,
  setSubmitted,
}: AppointmentFormProps) {
  return (
    <section
      id="appointment"
      className="py-20"
      style={{ background: "#0B2545" }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 reveal">
          <Tag text="Get Started" />
          <h2
            className="font-display font-800 text-white mt-3"
            style={{ fontSize: "clamp(1.7rem,3.5vw,2.5rem)" }}
          >
            Book Your Appointment
          </h2>
          <p className="mt-3 text-sm" style={{ color: "#7EA3C0" }}>
            Fill in your details and we will confirm your slot within 2 hours.
            No card required.
          </p>
        </div>

        {submitted ? (
          <div
            className="reveal rounded-3xl p-10 text-center border"
            style={{
              background: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-[#2E7D6B]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="font-display font-700 text-white text-xl mb-2">
              Request Received!
            </h3>
            <p style={{ color: "#7EA3C0" }} className="text-sm">
              We will call or WhatsApp you within 2 hours to confirm your
              appointment.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 cta-gold font-600 text-[#0B2545] px-6 py-2.5 rounded-xl text-sm"
            >
              Book Another
            </button>
          </div>
        ) : (
          <div
            className="reveal rounded-3xl p-8 md:p-10 border"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label
                  className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                  style={{ color: "#7EA3C0" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Farhan Hossain"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px solid rgba(255,255,255,0.14)",
                    color: "white",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#C9A227")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.14)")
                  }
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                  style={{ color: "#7EA3C0" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+880 1XXX-XXXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px solid rgba(255,255,255,0.14)",
                    color: "white",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#C9A227")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.14)")
                  }
                />
              </div>

              {/* Treatment */}
              <div>
                <label
                  className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                  style={{ color: "#7EA3C0" }}
                >
                  Treatment
                </label>
                <select
                  value={form.treatment}
                  onChange={(e) =>
                    setForm({ ...form, treatment: e.target.value })
                  }
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all appearance-none"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px solid rgba(255,255,255,0.14)",
                    color: form.treatment ? "white" : "#7EA3C0",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#C9A227")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.14)")
                  }
                >
                  <option value="" style={{ background: "#0B2545" }}>
                    Select Treatment
                  </option>
                  {TREATMENTS.map((t) => (
                    <option
                      key={t.name}
                      value={t.name}
                      style={{ background: "#0B2545" }}
                    >
                      {t.name}
                    </option>
                  ))}
                  <option value="general" style={{ background: "#0B2545" }}>
                    General Checkup
                  </option>
                  <option value="other" style={{ background: "#0B2545" }}>
                    Other / Not Sure
                  </option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label
                  className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                  style={{ color: "#7EA3C0" }}
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px solid rgba(255,255,255,0.14)",
                    color: "white",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#C9A227")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.14)")
                  }
                />
              </div>

              {/* Time slots */}
              <div className="sm:col-span-2">
                <label
                  className="block text-xs font-600 mb-2 uppercase tracking-wider"
                  style={{ color: "#7EA3C0" }}
                >
                  Preferred Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {[
                    "9:00 AM",
                    "11:00 AM",
                    "1:00 PM",
                    "3:00 PM",
                    "5:00 PM",
                    "7:00 PM",
                  ].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm({ ...form, time: t })}
                      className="py-2 rounded-xl text-xs font-600 border transition-all"
                      style={
                        form.time === t
                          ? {
                              background: "#C9A227",
                              borderColor: "#C9A227",
                              color: "#0B2545",
                            }
                          : {
                              background: "rgba(255,255,255,0.07)",
                              borderColor: "rgba(255,255,255,0.15)",
                              color: "#A8BDD0",
                            }
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  className="block text-xs font-600 mb-1.5 uppercase tracking-wider"
                  style={{ color: "#7EA3C0" }}
                >
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your concern or any special requirements..."
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px solid rgba(255,255,255,0.14)",
                    color: "white",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#C9A227")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.14)")
                  }
                />
              </div>
            </div>

            <button
              onClick={() => {
                if (form.name && form.phone) setSubmitted(true);
              }}
              className="w-full mt-6 cta-gold font-700 text-[#0B2545] py-4 rounded-xl text-base"
              style={{ boxShadow: "0 6px 28px rgba(201,162,39,0.4)" }}
            >
              Confirm Appointment →
            </button>

            <p
              className="text-center text-xs mt-3"
              style={{ color: "#4A6A85" }}
            >
              Or call directly:{" "}
              <a href="tel:+8801711234567" className="text-[#C9A227] font-600">
                +880 1711-234567
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
