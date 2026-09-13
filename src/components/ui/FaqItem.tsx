import { useState } from "react";

export default function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-[#2E7D6B] shadow-sm" : "border-[#D9D3C8]"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 hover:bg-[#FAF8F4] transition-colors"
        aria-expanded={open}
      >
        <span
          className={`font-600 text-sm leading-snug transition-colors ${open ? "text-[#2E7D6B]" : "text-[#1A2B3C]"}`}
        >
          {q}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={open ? "#2E7D6B" : "#6B7C8E"}
          strokeWidth="2"
          className={`flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className={`acc-body ${open ? "open" : ""}`}>
        <p className="px-5 pb-4 text-sm text-[#4A5E70] leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
