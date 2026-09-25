import Image from "next/image";

/** Reserved for an owner-approved Viet Le avatar asset. */
export function AboutIdentityMedia() {
  return (
    <div className="about-card about-card-image about-identity-media" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}>
      <Image src="/images/about-wind.webp" alt="Illustrative wind turbines across a green landscape" fill sizes="(max-width: 650px) calc(100vw - 32px), (max-width: 900px) calc((100vw - 64px) / 2), 380px" quality={85} className="about-photo" />
      <span className="about-image-tag">Renewable Energy</span>
    </div>
  );
}
