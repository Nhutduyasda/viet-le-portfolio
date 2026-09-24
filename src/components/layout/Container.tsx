import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className = "",
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
