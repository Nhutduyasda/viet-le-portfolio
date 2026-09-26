import { portfolioData } from "@/content/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  const { profile } = portfolioData;
  return (
    <footer className="site-footer">
      <div className="phase2-container footer-inner">
        <div className="footer-identity"><strong>{profile.name}</strong><span>{profile.headline}</span></div>
        <nav aria-label="Footer navigation" className="footer-links">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
        </nav>
        <div className="footer-bottom"><span>© 2026 {profile.name}</span><a href="#overview">Back to top</a></div>
      </div>
    </footer>
  );
}
