"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-kalk/95 backdrop-blur">
      <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Zur Startseite">
          <Logo />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.slice(1).map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[0.83rem] font-semibold tracking-wide transition-colors ${
                      active
                        ? "text-kupfer"
                        : "text-ink hover:text-kupfer"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={site.phoneHref}
                className="bg-tanne px-4 py-2.5 text-[0.78rem] font-semibold tracking-wide text-kalk uppercase transition-colors hover:bg-kupfer"
              >
                {site.phone}
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex flex-col items-center justify-center gap-1.5 p-2 lg:hidden"
        >
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-[2px] w-6 bg-ink ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="absolute inset-x-0 top-full z-40 h-[calc(100svh-74px)] overflow-y-auto bg-tanne lg:hidden"
        >
          <ul className="flex flex-col px-6 py-8">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line-dark">
                <Link
                  href={item.href}
                  className="display block py-4 text-3xl text-kalk transition-colors hover:text-stroh"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-8">
              <a
                href={site.phoneHref}
                className="inline-block bg-kupfer px-6 py-3 text-sm font-semibold tracking-wide text-kalk uppercase"
              >
                Anrufen · {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
