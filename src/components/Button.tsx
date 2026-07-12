import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-kupfer text-kalk hover:bg-kupfer-hell focus-visible:bg-kupfer-hell",
  outline:
    "border border-current text-inherit hover:bg-ink/5 focus-visible:bg-ink/5",
  light:
    "bg-kalk text-tanne hover:bg-kalk-deep focus-visible:bg-kalk-deep",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  external?: boolean;
}) {
  const className = `inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${styles[variant]}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
