import Link from "next/link";
import { site } from "@/data/site";

/** Schnellzugriff am unteren Rand – nur mobil. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-tanne/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 text-center text-[0.68rem] font-semibold tracking-[0.12em] text-kalk uppercase">
        <a href={site.phoneHref} className="flex flex-col items-center gap-1 py-3 active:bg-tanne-soft">
          <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden="true">
            <path d="M3.3 1.4c.4-.4 1-.5 1.5-.2l1.9 1.2c.5.4.7 1 .5 1.6l-.5 1.4c-.1.4 0 .8.3 1.1l2.5 2.5c.3.3.7.4 1.1.3l1.4-.5c.6-.2 1.2 0 1.6.5l1.2 1.9c.3.5.2 1.1-.2 1.5l-1 1c-.6.6-1.5.8-2.3.5C9.6 13.5 6.9 11.8 5 9.9 3.2 8.1 1.5 5.4.8 2.7c-.2-.8 0-1.7.5-2.3l1-1z" transform="translate(1 1) scale(0.85)" />
          </svg>
          Anrufen
        </a>
        <Link href="/speisekarte" className="flex flex-col items-center gap-1 border-x border-line-dark py-3 active:bg-tanne-soft">
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="2.5" y="1.5" width="11" height="13" rx="1.5" />
            <path d="M5.5 5h5M5.5 8h5M5.5 11h3" />
          </svg>
          Speisekarte
        </Link>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 active:bg-tanne-soft"
        >
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M8 14.5s-4.5-4.6-4.5-8a4.5 4.5 0 0 1 9 0c0 3.4-4.5 8-4.5 8z" />
            <circle cx="8" cy="6.5" r="1.8" />
          </svg>
          Route
        </a>
      </div>
    </div>
  );
}
