"use client";

import { useEffect, useState } from "react";
import { hours, openRanges } from "@/data/site";

/** Live-Chip „Heute geöffnet / geschlossen" – rendert erst nach Mount. */
export function OpenToday({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [state, setState] = useState<{
    open: boolean;
    label: string;
  } | null>(null);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();
    const ranges = openRanges[day] ?? [];
    const open = ranges.some(([from, to]) => minutes >= from && minutes < to);
    const dayLabel = hours[(day + 6) % 7];
    setState({ open, label: dayLabel ? dayLabel.times : "" });
  }, []);

  if (!state) return null;

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase ${
        tone === "dark"
          ? "border-kalk/25 text-kalk/85"
          : "border-line text-ink-soft"
      }`}
    >
      <span
        aria-hidden="true"
        className={`size-2 rounded-full ${state.open ? "bg-gruen-hell" : "bg-kupfer-hell"}`}
      />
      {state.open ? "Jetzt geöffnet" : "Derzeit geschlossen"} · heute{" "}
      {state.label}
    </span>
  );
}
