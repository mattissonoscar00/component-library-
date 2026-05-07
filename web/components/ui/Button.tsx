"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

/* ==========================================================================
   TYPES
   ========================================================================== */

export type ButtonSize = "lg" | "sm";
export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as child element (e.g., Link) using Radix Slot */
  asChild?: boolean;
  /** Button visual variant */
  variant?: ButtonVariant;
  /** Button size: lg (48px) or sm (40px) */
  size?: ButtonSize;
  /** Optional icon to show after label */
  suffixIcon?: React.ReactNode;
}

/* ==========================================================================
   STYLES (using design tokens)
   ========================================================================== */

const baseStyles = [
  "inline-flex items-center justify-center gap-[var(--space-gap-xs)]",
  "font-[var(--font-weight-button-label)] font-[family-name:var(--font-family-base)]",
  "rounded-[var(--button-radius-default)]",
  "transition-colors duration-150 ease-in-out",
  "cursor-pointer select-none",
  "focus:outline-none focus-visible:outline-none",
  "disabled:cursor-not-allowed",
].join(" ");

const sizeStyles: Record<ButtonSize, string> = {
  lg: [
    "h-[var(--button-height-lg)] px-[var(--space-padding-16)]",
    "text-[length:var(--font-size-button-label-m)] leading-none",
  ].join(" "),
  sm: [
    "h-[var(--button-height-sm)] px-[var(--space-padding-12)]",
    "text-[length:var(--font-size-button-label-s)] leading-[1.2] tracking-[var(--letter-spacing-button-s)]",
  ].join(" "),
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--button-background-default)] text-[var(--button-label-default)]",
    "hover:bg-[var(--button-background-hover)]",
    "active:bg-[var(--button-background-pressed)]",
    "disabled:bg-[var(--button-background-disabled)] disabled:opacity-[var(--opacity-80)]",
    "focus-visible:ring-[4px] focus-visible:ring-[var(--border-focus-color-primary)]",
    "focus-visible:ring-offset-[2px] focus-visible:ring-offset-[var(--border-focus-color-surface)]",
  ].join(" "),
  secondary: [
    "bg-[var(--button-background-secondary-default)]",
    "text-[var(--button-label-secondary)]",
    "border border-[var(--color-container-emphasis)]",
    "hover:bg-[var(--button-background-secondary-hover)]",
    "active:bg-[var(--button-background-secondary-hover)]",
    "disabled:opacity-[var(--opacity-40)] disabled:bg-[var(--button-background-secondary-default)]",
    "focus-visible:ring-[4px] focus-visible:ring-[var(--border-focus-color-primary)]",
    "focus-visible:ring-offset-[2px] focus-visible:ring-offset-[var(--border-focus-color-surface)]",
  ].join(" "),
};

/* ==========================================================================
   ICON: Arrow Forward (inline SVG to avoid external dependencies)
   Supports size prop to match button sizes
   ========================================================================== */

export interface ArrowForwardIconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size: matches button size (lg=20px, sm=16px) */
  size?: ButtonSize;
}

export const ArrowForwardIcon = ({
  className,
  size = "lg",
  ...props
}: ArrowForwardIconProps) => {
  const iconSize = size === "sm" ? 16 : 20;
  
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/* ==========================================================================
   BUTTON COMPONENT
   ========================================================================== */

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "lg",
      asChild = false,
      suffixIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const combinedClassName = [
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Comp
        className={combinedClassName}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span>{children}</span>
            {suffixIcon}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;
