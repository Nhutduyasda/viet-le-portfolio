"use client";

import Image from "next/image";
import { useRef } from "react";

/** Uses the supplied portrait today; the center card remains the avatar media slot. */
export function AboutIdentityMedia() {
  const stage = useRef<HTMLDivElement>(null);

  function point(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    stage.current?.style.setProperty("--avatar-rotate-y", `${x * 6}deg`);
    stage.current?.style.setProperty("--avatar-rotate-x", `${y * -3.5}deg`);
  }

  function reset() {
    stage.current?.style.setProperty("--avatar-rotate-y", "0deg");
    stage.current?.style.setProperty("--avatar-rotate-x", "0deg");
  }

  return (
    <div className="about-card about-card-image about-identity-media" data-reveal style={{ "--reveal-index": 1 } as React.CSSProperties}>
      <div ref={stage} className="viet-avatar-stage" onPointerMove={point} onPointerLeave={reset}>
        <Image src="/images/viet-le-avatar.png" alt="3D-style portrait of Viet Le wearing glasses, a dark blazer and white shirt" fill loading="lazy" sizes="(max-width: 650px) calc(100vw - 32px), (max-width: 900px) calc((100vw - 64px) / 2), 380px" quality={90} className="viet-avatar-portrait" />
        <span className="avatar-name-pill">Viet Le</span>
      </div>
    </div>
  );
}
