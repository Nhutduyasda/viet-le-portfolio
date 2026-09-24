import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({
  children,
  id,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
}
