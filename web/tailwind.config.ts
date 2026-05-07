import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ==========================================================================
         COLORS - Mapped from Figma design tokens
         ========================================================================== */
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Container colors
        container: {
          DEFAULT: "var(--color-container-default)",
          emphasis: "var(--color-container-emphasis)",
        },

        // Border colors
        border: {
          DEFAULT: "var(--border-color-default)",
          black: {
            100: "var(--sds-color-black-100)",
            200: "var(--sds-color-black-200)",
          },
        },

        // Text colors
        text: {
          primary: "var(--text-default-primary)",
          DEFAULT: "var(--text-default-default)",
        },

        // Surface colors
        surface: {
          DEFAULT: "var(--color-on-surface-default)",
          neutral: "var(--color-on-surface-neutral)",
        },

        // Button colors
        button: {
          DEFAULT: "var(--button-background-default)",
          secondary: "var(--button-background-secondary-default)",
          label: {
            DEFAULT: "var(--button-label-default)",
            secondary: "var(--button-label-secondary)",
          },
        },

        // Icon colors
        icon: {
          DEFAULT: "var(--icon-color-default)",
          white: "var(--icon-color-white)",
        },
      },

      /* ==========================================================================
         SPACING - Gap & Padding tokens
         ========================================================================== */
      spacing: {
        "gap-xxs": "var(--space-gap-xxs)",
        "gap-xs": "var(--space-gap-xs)",
        "gap-s": "var(--space-gap-s)",
        "gap-m": "var(--space-gap-m)",
        "gap-l": "var(--space-gap-l)",
        "gap-8": "var(--space-gap-8)",
        "gap-12": "var(--space-gap-12)",
        "gap-16": "var(--space-gap-16)",
        "gap-24": "var(--space-gap-24)",
        "gap-32": "var(--space-gap-32)",
        "padding-xs": "var(--space-padding-xs)",
        "padding-s": "var(--space-padding-s)",
        "padding-m": "var(--space-padding-m)",
        "padding-16": "var(--space-padding-16)",
      },

      /* ==========================================================================
         BORDER RADIUS
         ========================================================================== */
      borderRadius: {
        subtle: "var(--container-radius-subtle)",
        DEFAULT: "var(--container-radius-default)",
        button: "var(--button-radius-default)",
        xl: "var(--radius-xl)",
      },

      /* ==========================================================================
         BORDER WIDTH
         ========================================================================== */
      borderWidth: {
        DEFAULT: "var(--stroke-border)",
      },

      /* ==========================================================================
         BOX SHADOW
         ========================================================================== */
      boxShadow: {
        card: "var(--shadow-200)",
        "depth-100": "var(--depth-0) var(--depth-025) var(--depth-100) 0px var(--sds-color-black-100)",
        "depth-200": "var(--shadow-200)",
      },

      /* ==========================================================================
         TYPOGRAPHY - Font Family
         ========================================================================== */
      fontFamily: {
        base: ["var(--font-family-base)", "sans-serif"],
        heading: ["var(--font-family-heading)", "sans-serif"],
        paragraph: ["var(--font-family-paragraph)", "sans-serif"],
        eyebrow: ["var(--font-family-eyebrow)", "sans-serif"],
      },

      /* ==========================================================================
         TYPOGRAPHY - Font Size
         ========================================================================== */
      fontSize: {
        "display-s": ["var(--font-size-display-s)", { lineHeight: "var(--line-height-heading)" }],
        "display-xs": ["var(--font-size-display-xs)", { lineHeight: "var(--line-height-heading)" }],
        "subheading-l": ["var(--font-size-subheading-l)", { lineHeight: "1" }],
        "body-l": ["var(--font-size-body-l)", { lineHeight: "var(--line-height-body)" }],
        "body-m": ["var(--font-size-body-m)", { lineHeight: "var(--line-height-body)" }],
        "body-s": ["var(--font-size-body-s)", { lineHeight: "var(--line-height-body)" }],
        "body-xs": ["var(--font-size-body-xs)", { lineHeight: "var(--line-height-body)" }],
        "button-m": ["var(--font-size-button-label-m)", { lineHeight: "1" }],
        eyebrow: ["var(--font-size-eyebrow)", { lineHeight: "1.2", letterSpacing: "var(--letter-spacing-eyebrow)" }],
      },

      /* ==========================================================================
         TYPOGRAPHY - Letter Spacing
         ========================================================================== */
      letterSpacing: {
        heading: "var(--letter-spacing-heading)",
        eyebrow: "var(--letter-spacing-eyebrow)",
      },

      /* ==========================================================================
         TYPOGRAPHY - Line Height
         ========================================================================== */
      lineHeight: {
        heading: "var(--line-height-heading)",
        eyebrow: "var(--line-height-eyebrow)",
        body: "var(--line-height-body)",
      },

      /* ==========================================================================
         ICON SIZE (as width/height utilities)
         ========================================================================== */
      width: {
        "icon-xxs": "var(--icon-size-xxs)",
        "icon-s": "var(--icon-size-s)",
      },
      height: {
        "icon-xxs": "var(--icon-size-xxs)",
        "icon-s": "var(--icon-size-s)",
      },
    },
  },
  plugins: [],
};
export default config;
