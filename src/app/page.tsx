import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/content/profile";

export default function Home() {
  const { profile, navigation } = portfolioData;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-[var(--surface)] focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* Header Placeholder */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xs sticky top-0 z-40">
        <Container className="flex h-16 items-center justify-between">
          <span className="font-serif text-xl font-normal tracking-tight text-[var(--primary)]">
            {profile.name}
          </span>
          <nav aria-label="Main Navigation">
            <ul className="flex items-center gap-6 text-sm text-[var(--muted)]">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>

      {/* Main Content Area — Foundation Verification Shell */}
      <main id="main-content" className="flex-1">
        <Section>
          <Container>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12 shadow-xs">
              <SectionHeading
                eyebrow="Phase 0 — Repository Foundation"
                title={`${profile.name} — Professional Portfolio`}
                description="Foundation shell verifying Scandinavian clean-energy design tokens, typography pairing, container primitives, and responsive behavior. Phase 1 will implement the full Header & Hero art direction."
              />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-[var(--border)]">
                <div className="p-4 rounded-lg bg-[var(--bg)] border border-[var(--border)]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Role Headline
                  </span>
                  <p className="mt-1 font-medium text-[var(--text)]">
                    {profile.headline}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[var(--bg)] border border-[var(--border)]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Domains
                  </span>
                  <p className="mt-1 font-medium text-[var(--text)]">
                    {profile.domains.join(" · ")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[var(--bg)] border border-[var(--border)]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Location
                  </span>
                  <p className="mt-1 font-medium text-[var(--text)]">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* Footer Placeholder */}
      <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Renewable Energy · Solar PV · BESS · Project Development</p>
        </Container>
      </footer>
    </div>
  );
}
