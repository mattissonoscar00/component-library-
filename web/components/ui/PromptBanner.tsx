"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Button, ArrowForwardIcon } from "./Button";

/* ==========================================================================
   TYPES
   ========================================================================== */

export type PromptBannerSize = "large" | "medium" | "small";

export interface PromptBannerProps extends React.HTMLAttributes<HTMLElement> {
  /** Render as child element using Radix Slot */
  asChild?: boolean;
  /** Banner size variant */
  size?: PromptBannerSize;
  /** Show the image area */
  showImage?: boolean;
  /** Show the dismiss (X) icon — only applies to large and medium */
  showDismissIcon?: boolean;
  /** Show the secondary button */
  secondaryButton?: boolean;

  /** Eyebrow label text */
  eyebrow?: string;
  /** Main heading text */
  heading?: string;
  /** Body description text */
  description?: string;
  /** Array of feature/USP strings for the checklist */
  features?: string[];
  /** Old (strikethrough) price */
  oldPrice?: string;
  /** New (highlighted) price */
  newPrice?: string;
  /** Discount tag label */
  tagLabel?: string;
  /** Footnote / fine-print text */
  footnote?: string;
  /** Primary CTA button label */
  primaryLabel?: string;
  /** Secondary CTA button label */
  secondaryLabel?: string;

  /** Image source URL */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;

  /** Primary button click handler */
  onPrimaryClick?: () => void;
  /** Secondary button click handler */
  onSecondaryClick?: () => void;
  /** Dismiss button click handler */
  onDismiss?: () => void;
}

/* ==========================================================================
   SUB-COMPONENTS
   ========================================================================== */

const CheckIcon = ({ size = 20 }: { size?: number }) => (
  <div
    className="flex items-center justify-center shrink-0 rounded-[var(--radius-xl)] bg-[var(--color-container-emphasis)]"
    style={{ width: size, height: size }}
  >
    <svg
      width={size * 0.6}
      height={size * 0.6}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 6L5 9L10 3"
        stroke="var(--icon-color-white)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 5L15 15M15 5L5 15"
      stroke="var(--icon-color-default)"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Tag = ({ label }: { label: string }) => (
  <span
    className={[
      "inline-flex items-center justify-center shrink-0",
      "h-[24px] px-[8px]",
      "rounded-[var(--container-radius-subtle)]",
      "bg-[var(--color-tag-color)]",
      "text-[var(--color-tag-on-tag)]",
      "font-[var(--font-weight-button-label)] font-[family-name:var(--font-family-base)]",
      "text-[length:12px] leading-[1.2] whitespace-nowrap",
    ].join(" ")}
  >
    {label}
  </span>
);

/* ==========================================================================
   STYLES
   ========================================================================== */

const containerBase = [
  "relative",
  "bg-[var(--color-container-default)]",
  "border border-[var(--border-color-default)]",
  "rounded-[var(--container-radius-default)]",
  "shadow-[var(--shadow-200)]",
].join(" ");

const containerSizeStyles: Record<PromptBannerSize, string> = {
  large: "flex flex-row gap-[var(--space-gap-32)] p-[var(--space-padding-s)] w-[900px]",
  medium: "flex flex-row gap-[var(--space-gap-32)] p-[var(--space-padding-s)] w-[700px]",
  small: "flex flex-col gap-[var(--space-gap-32)] p-[var(--space-padding-xs)] w-[390px]",
};

/* ==========================================================================
   PROMPT BANNER COMPONENT
   ========================================================================== */

export const PromptBanner = React.forwardRef<HTMLElement, PromptBannerProps>(
  (
    {
      className,
      asChild = false,
      size = "large",
      showImage = true,
      showDismissIcon = true,
      secondaryButton = true,
      eyebrow = "PASSA PÅ",
      heading = "5X mer surf för 50 SEK!",
      description = "Uppgradera till Zapp Plus och gå från 10 till 50 GB — plus 5G och EU‑roaming. Ingen bindningstid.",
      features = [
        "50 GB surf istället för 10 GB",
        "5G-hastighet ingår",
        "10 GB EU-roaming utan extra kostnad",
      ],
      oldPrice = "319 kr/mån.",
      newPrice = "49 kr/mån",
      tagLabel = "-180 kr",
      footnote = "Uppgradera, nedgradera eller avsluta — när som helst.\nGiltigt till: 2025-05-29",
      primaryLabel = "Label",
      secondaryLabel = "Label",
      imageSrc,
      imageAlt = "",
      onPrimaryClick,
      onSecondaryClick,
      onDismiss,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "section";
    const isSmall = size === "small";
    const isLargeOrMedium = size === "large" || size === "medium";

    const combinedClassName = [
      containerBase,
      containerSizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const headingSizeClass =
      size === "small"
        ? "text-[length:var(--font-size-heading-l)] leading-[var(--line-height-heading-l)]"
        : "text-[length:var(--font-size-display-xs)] leading-[var(--line-height-heading-40)] tracking-[var(--letter-spacing-heading)]";

    const bodySizeClass =
      size === "small"
        ? "text-[length:var(--font-size-body-s)]"
        : "text-[length:var(--font-size-body-m)]";

    const listIconSize = isSmall ? 16 : 20;
    const listGapClass = isSmall ? "gap-[var(--space-gap-xs)]" : "gap-[var(--space-gap-12)]";
    const listItemGapClass = isSmall ? "gap-[var(--space-gap-xs)]" : "gap-[var(--space-gap-12)]";
    const eyebrowGapClass = isSmall ? "gap-[var(--space-gap-4)]" : "gap-[var(--space-gap-xs)]";
    const contentGapClass = size === "large" ? "gap-[var(--space-gap-l)]" : "gap-[var(--space-gap-m)]";
    const buttonSize = isSmall ? "sm" : "lg";

    return (
      <Comp
        className={combinedClassName}
        ref={ref as React.Ref<HTMLElement>}
        role="region"
        aria-label={eyebrow}
        {...props}
      >
        {/* IMAGE */}
        {showImage && isLargeOrMedium && (
          <div className="shrink-0 w-[276px] self-stretch overflow-hidden rounded-[var(--container-radius-subtle)] relative">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[var(--sds-color-black-100)]" />
            )}
          </div>
        )}
        {showImage && isSmall && (
          <div className="w-full aspect-[294/210] overflow-hidden rounded-[var(--container-radius-subtle)] relative shrink-0">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[var(--sds-color-black-100)]" />
            )}
          </div>
        )}

        {/* CONTENT */}
        <div className={`flex flex-col ${contentGapClass} flex-1 min-w-0`}>
          {/* TOP CONTENT: eyebrow + heading + description */}
          <div
            className={[
              "flex flex-col gap-[var(--space-gap-s)]",
              isLargeOrMedium ? "pr-[var(--space-padding-xl)]" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className={`flex flex-col ${eyebrowGapClass}`}>
              <p
                className={[
                  "font-[var(--font-weight-eyebrow)] font-[family-name:var(--font-family-eyebrow)]",
                  "text-[length:var(--font-size-eyebrow)] leading-[1.2]",
                  "tracking-[var(--letter-spacing-eyebrow)] uppercase",
                  "text-[var(--text-default-primary)]",
                ].join(" ")}
              >
                {eyebrow}
              </p>
              <h2
                className={[
                  "font-[var(--font-weight-heading)] font-[family-name:var(--font-family-heading)]",
                  "text-[var(--color-on-container-default)]",
                  headingSizeClass,
                ].join(" ")}
              >
                {heading}
              </h2>
            </div>
            <p
              className={[
                "font-[var(--font-weight-regular)] font-[family-name:var(--font-family-paragraph)]",
                "leading-[var(--line-height-body)]",
                "text-[var(--color-on-surface-default)]",
                bodySizeClass,
              ].join(" ")}
            >
              {description}
            </p>
          </div>

          {/* FEATURE LIST */}
          {features.length > 0 && (
            <ul className={`flex flex-col ${listGapClass} list-none p-0 m-0`}>
              {features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-center ${listItemGapClass}`}
                >
                  <CheckIcon size={listIconSize} />
                  <span
                    className={[
                      "font-[var(--font-weight-medium)] font-[family-name:var(--font-family-base)]",
                      "text-[length:var(--font-size-body-s)]",
                      "leading-[var(--line-height-eyebrow)]",
                      "text-[var(--text-default-default)]",
                    ].join(" ")}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* PRICE + BUTTONS (large: flex-row wrap, medium: stacked, small: stacked) */}
          <div
            className={
              size === "large"
                ? "flex flex-wrap gap-[var(--space-gap-32)] items-start"
                : "flex flex-col gap-[var(--space-gap-xs)]"
            }
          >
            {/* PRICE SECTION */}
            <div className="flex flex-col gap-[var(--space-gap-xs)] flex-1 min-w-[188px]">
              <div className="flex flex-wrap items-center gap-x-[var(--space-gap-xs)] gap-y-[var(--space-gap-4)]">
                <div
                  className={[
                    "flex items-center gap-[var(--space-gap-4)]",
                    "font-[var(--font-weight-heading)] font-[family-name:var(--font-family-heading)]",
                    "text-[length:var(--font-size-subheading-l)] leading-none whitespace-nowrap",
                  ].join(" ")}
                >
                  <span className="line-through text-[var(--color-on-surface-neutral)]">
                    {oldPrice}
                  </span>
                  <span className="text-[var(--text-default-primary)]">
                    {newPrice}
                  </span>
                </div>
                {tagLabel && <Tag label={tagLabel} />}
              </div>
              <p
                className={[
                  "font-[var(--font-weight-regular)] font-[family-name:var(--font-family-paragraph)]",
                  "text-[length:var(--font-size-body-xs)] leading-[var(--line-height-body)]",
                  "text-[var(--color-on-surface-neutral)]",
                  "whitespace-pre-line",
                ].join(" ")}
              >
                {footnote}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div
              className={
                isSmall
                  ? "flex flex-col gap-[var(--space-gap-xs)] w-full"
                  : "flex gap-[var(--space-gap-xs)] items-center shrink-0"
              }
            >
              {isSmall ? (
                <>
                  <Button
                    variant="primary"
                    size={buttonSize}
                    suffixIcon={<ArrowForwardIcon size={buttonSize} />}
                    onClick={onPrimaryClick}
                    className="w-full inline-flex items-center justify-center gap-[var(--space-gap-xs)] font-[var(--font-weight-button-label)] font-[family-name:var(--font-family-base)] rounded-[var(--button-radius-default)] transition-colors duration-150 ease-in-out cursor-pointer select-none focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed h-[var(--button-height-sm)] px-[var(--space-padding-12)] text-[length:var(--font-size-button-label-s)] leading-[1.2] tracking-[var(--letter-spacing-button-s)] bg-[var(--button-background-default)] text-[var(--button-label-default)] hover:bg-[var(--button-background-hover)] active:bg-[var(--button-background-pressed)] disabled:bg-[var(--button-background-disabled)] disabled:opacity-[var(--opacity-80)] focus-visible:ring-[4px] focus-visible:ring-[var(--border-focus-color-primary)] focus-visible:ring-offset-[2px] focus-visible:ring-offset-[var(--border-focus-color-surface)]"
                  >
                    {primaryLabel}
                  </Button>
                  {secondaryButton && (
                    <Button
                      variant="secondary"
                      size={buttonSize}
                      onClick={onSecondaryClick}
                      className="w-full inline-flex items-center justify-center gap-[var(--space-gap-xs)] font-[var(--font-weight-button-label)] font-[family-name:var(--font-family-base)] rounded-[var(--button-radius-default)] transition-colors duration-150 ease-in-out cursor-pointer select-none focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed h-[var(--button-height-sm)] px-[var(--space-padding-12)] text-[length:var(--font-size-button-label-s)] leading-[1.2] tracking-[var(--letter-spacing-button-s)] bg-[var(--button-background-secondary-default)] text-[var(--button-label-secondary)] border border-[var(--color-container-emphasis)] hover:bg-[var(--button-background-secondary-hover)] active:bg-[var(--button-background-secondary-hover)] disabled:opacity-[var(--opacity-40)] disabled:bg-[var(--button-background-secondary-default)] focus-visible:ring-[4px] focus-visible:ring-[var(--border-focus-color-primary)] focus-visible:ring-offset-[2px] focus-visible:ring-offset-[var(--border-focus-color-surface)]"
                    >
                      {secondaryLabel}
                    </Button>
                  )}
                </>
              ) : (
                <>
                  {secondaryButton && (
                    <Button
                      variant="secondary"
                      size={buttonSize}
                      onClick={onSecondaryClick}
                    >
                      {secondaryLabel}
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    size={buttonSize}
                    suffixIcon={<ArrowForwardIcon size={buttonSize} />}
                    onClick={onPrimaryClick}
                  >
                    {primaryLabel}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* DISMISS ICON */}
        {showDismissIcon && isLargeOrMedium && (
          <button
            type="button"
            className={[
              "absolute top-[23px] right-[23px]",
              "flex items-center justify-center",
              "w-[40px] h-[40px] min-w-[44px] min-h-[44px]",
              "rounded-[var(--radius-xl)]",
              "cursor-pointer bg-transparent border-none p-0",
              "hover:bg-[var(--sds-color-black-100)]",
              "transition-colors duration-150",
              "focus:outline-none",
              "focus-visible:ring-[4px] focus-visible:ring-[var(--border-focus-color-primary)]",
              "focus-visible:ring-offset-[2px] focus-visible:ring-offset-[var(--border-focus-color-surface)]",
            ].join(" ")}
            onClick={onDismiss}
            aria-label="Close promotion"
          >
            <CloseIcon />
          </button>
        )}
      </Comp>
    );
  }
);

PromptBanner.displayName = "PromptBanner";

export default PromptBanner;
