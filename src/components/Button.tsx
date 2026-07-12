import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-kupfer text-kalk hover:bg-kupfer-hell focus-visible:bg-kupfer-hell",
  outline:
    "border border-current text-inherit hover:bg-current/10 focus-visible:bg-current/10",
  light: "bg-kalk text-tanne hover:bg-kalk-deep focus-visible:bg-kalk-deep",
  dark: "bg-tanne text-kalk hover:bg-tanne-soft focus-visible:bg-tanne-soft",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  size?: "md" | "lg";
  external?: boolean;
}) {
  const className = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.08em] uppercase transition-all duration-200 hover:-translate-y-0.5 ${
    size === "lg" ? "px-8 py-4 text-sm" : "px-6 py-3 text-[0.78rem]"
  } ${styles[variant]}`;

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
