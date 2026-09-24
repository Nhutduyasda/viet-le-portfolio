import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`.trim()}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-wider uppercase text-[var(--accent)] mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[var(--primary)] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-[var(--muted)] leading-relaxed max-w-prose">
          {description}
        </p>
      )}
    </div>
  );
}
