import { useCallback, useRef, useState } from "react";
import { Ico, P } from "./Icon";

export default function BACard({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const move = useCallback((cx: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(4, Math.min(96, ((cx - r.left) / r.width) * 100)));
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white card-lift">
      <div
        ref={ref}
        className="relative select-none cursor-col-resize"
        style={{ height: 210 }}
        onMouseDown={() => {
          drag.current = true;
        }}
        onMouseUp={() => {
          drag.current = false;
        }}
        onMouseMove={(e) => drag.current && move(e.clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        onMouseLeave={() => {
          drag.current = false;
        }}
      >
        {/* after */}
        <img
          src={after}
          alt={`After — ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* before clip */}
        <div
          className="absolute inset-0 overflow-hidden ba-clip"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt={`Before — ${label}`}
            className="absolute inset-0 h-full object-cover object-left"
            style={{
              width: `${ref.current?.offsetWidth ?? 400}px`,
              maxWidth: "none",
            }}
            draggable={false}
          />
        </div>

        {/* handle */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: `calc(${pos}% - 1px)` }}
        >
          <div className="absolute inset-y-0 w-0.5 bg-white/90 shadow"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white rounded-full shadow-xl flex items-center justify-center border border-[#D9D3C8]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0B2545"
              strokeWidth="2.5"
            >
              <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        {/* labels */}
        <span className="absolute top-3 left-3 text-[10px] font-700 tracking-wide bg-[#0B2545]/70 text-white px-2.5 py-1 rounded-full uppercase">
          Before
        </span>
        <span className="absolute top-3 right-3 text-[10px] font-700 tracking-wide bg-[#2E7D6B]/90 text-white px-2.5 py-1 rounded-full uppercase">
          After
        </span>
      </div>

      <div className="px-4 py-3 bg-white flex items-center justify-between">
        <span className="text-sm font-600 text-[#0B2545]">{label}</span>
        <span className="text-[10px] text-[#6B7C8E] font-500 flex items-center gap-1">
          <Ico d={P.eye} size={12} cls="text-[#2E7D6B]" /> Drag to compare
        </span>
      </div>
    </div>
  );
}
