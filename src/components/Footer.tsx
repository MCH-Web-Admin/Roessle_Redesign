import Link from "next/link";
import { Logo } from "./Logo";
import { hours, nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-tanne text-kalk">
      <div className="fachwerk-band text-stroh" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-5">
          <Logo dark />
          <p className="max-w-sm text-sm leading-relaxed text-kalk/70">
            Seit {site.since} bewirtet unser Fachwerkhaus Gäste in{" "}
            {site.place}. Regionale Küche, hauseigene Brennerei und ein
            Lädele voller guter Dinge – herzlich willkommen bei{" "}
            {site.owner}.
          </p>
          <div className="flex gap-4">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-stroh underline-offset-4 hover:underline"
            >
              Instagram
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-stroh underline-offset-4 hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-stroh">Öffnungszeiten</h2>
          <dl className="space-y-1.5 text-sm">
            {hours.map((row) => (
              <div key={row.day} className="flex justify-between gap-4">
                <dt className="text-kalk/70">{row.day}</dt>
                <dd className="tnum text-right">{row.times}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="eyebrow mb-5 text-stroh">Kontakt</h2>
            <address className="text-sm leading-relaxed not-italic text-kalk/80">
              {site.name} {site.place}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              <a href={site.phoneHref} className="hover:text-stroh">
                T {site.phone}
              </a>
              <br />
              <a href={site.emailHref} className="hover:text-stroh">
                {site.email}
              </a>
            </address>
          </div>
          <nav aria-label="Fußzeile">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-kalk/60">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-kalk">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-kalk/50">
          <p>
            © {new Date().getFullYear()} {site.name} {site.place} · seit{" "}
            {site.since}
          </p>
          <p className="flex gap-4">
            <Link href="/impressum" className="hover:text-kalk">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-kalk">
              Datenschutz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
