import { P } from "./Icon";

export default function Stars({
  n = 5,
  size = 14,
}: {
  n?: number;
  size?: number;
}) {
  return (
    <span className="inline-flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < n ? "#C9A227" : "none"}
          stroke="#C9A227"
          strokeWidth="1.5"
        >
          <path d={P.star} />
        </svg>
      ))}
    </span>
  );
}
