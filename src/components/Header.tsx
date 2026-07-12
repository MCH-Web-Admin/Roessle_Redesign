"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, navAll, site } from "@/data/site";

/**
 * Fixierte Navigation: transparent über dem dunklen Seitenkopf,
 * ab dem ersten Scroll kompakt auf Kalk-Grund.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = !scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? "bg-tanne"
          : scrolled
            ? "border-b border-line bg-kalk/92 shadow-[0_8px_30px_-18px_rgba(20,33,26,0.4)] backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-5">
        <Link href="/" aria-label="Zur Startseite" className="shrink-0">
          <Logo dark={light} compact={scrolled && !open} />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul
            className={`flex items-center gap-8 ${light ? "text-kalk" : "text-ink"}`}
          >
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-active={pathname.startsWith(item.href)}
                  className="navlink text-[0.82rem] font-semibold tracking-[0.04em]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-kupfer px-5 py-2.5 text-[0.75rem] font-semibold tracking-[0.08em] text-kalk uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-kupfer-hell sm:inline-flex"
          >
            <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true">
              <path d="M3.3 1.4c.4-.4 1-.5 1.5-.2l1.9 1.2c.5.4.7 1 .5 1.6l-.5 1.4c-.1.4 0 .8.3 1.1l2.5 2.5c.3.3.7.4 1.1.3l1.4-.5c.6-.2 1.2 0 1.6.5l1.2 1.9c.3.5.2 1.1-.2 1.5l-1 1c-.6.6-1.5.8-2.3.5C9.6 13.5 6.9 11.8 5 9.9 3.2 8.1 1.5 5.4.8 2.7c-.2-.8 0-1.7.5-2.3l1-1z" transform="translate(1 1) scale(0.85)" />
            </svg>
            Reservieren
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className={`flex flex-col items-center justify-center gap-[7px] rounded-full p-3 lg:hidden ${
              light ? "text-kalk" : "text-ink"
            }`}
          >
            <span className="sr-only">
              {open ? "Menü schließen" : "Menü öffnen"}
            </span>
            <span
              className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="absolute inset-x-0 top-full grain h-[calc(100dvh-80px)] overflow-y-auto bg-tanne lg:hidden"
        >
          <div className="flex min-h-full flex-col justify-between px-6 pt-6 pb-10">
            <ul>
              {navAll.map((item, i) => (
                <li
                  key={item.href}
                  className="menu-item border-b border-line-dark"
                  style={{ animationDelay: `${60 + i * 55}ms` }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between py-4"
                  >
                    <span className="display text-[2.1rem] text-kalk transition-colors group-hover:text-stroh">
                      {item.label}
                    </span>
                    <span aria-hidden="true" className="arrow-slide text-kupfer-hell">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="menu-item mt-10 flex flex-col gap-5"
              style={{ animationDelay: `${60 + navAll.length * 55}ms` }}
            >
              <a
                href={site.phoneHref}
                className="inline-flex w-fit items-center gap-3 rounded-full bg-kupfer px-7 py-4 text-sm font-semibold tracking-[0.08em] text-kalk uppercase"
              >
                Reservieren · {site.phone}
              </a>
              <p className="text-sm leading-relaxed text-kalk/60">
                {site.address.street} · {site.address.zip} {site.address.city}
              </p>
              <p className="flex gap-5 text-sm font-semibold text-stroh">
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
