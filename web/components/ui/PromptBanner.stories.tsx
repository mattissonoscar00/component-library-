import type { Meta, StoryObj } from "@storybook/react";
import { PromptBanner } from "./PromptBanner";

const meta: Meta<typeof PromptBanner> = {
  title: "UI/PromptBanner",
  component: PromptBanner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Upgrade prompt banner component with 3 responsive sizes (large, medium, small). Supports optional image, dismiss icon, and secondary button. Uses design tokens exclusively — no hardcoded values.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["large", "medium", "small"],
      description: "Banner size variant",
      table: { defaultValue: { summary: "large" } },
    },
    showImage: {
      control: "boolean",
      description: "Show the image area",
      table: { defaultValue: { summary: "true" } },
    },
    showDismissIcon: {
      control: "boolean",
      description: "Show the dismiss (X) icon (large and medium only)",
      table: { defaultValue: { summary: "true" } },
    },
    secondaryButton: {
      control: "boolean",
      description: "Show the secondary button",
      table: { defaultValue: { summary: "true" } },
    },
    eyebrow: { control: "text" },
    heading: { control: "text" },
    description: { control: "text" },
    oldPrice: { control: "text" },
    newPrice: { control: "text" },
    tagLabel: { control: "text" },
    footnote: { control: "text" },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof PromptBanner>;

const defaultProps = {
  eyebrow: "PASSA PÅ",
  heading: "5X mer surf för 50 SEK!",
  description:
    "Uppgradera till Zapp Plus och gå från 10 till 50 GB — plus 5G och EU‑roaming. Ingen bindningstid.",
  features: [
    "50 GB surf istället för 10 GB",
    "5G-hastighet ingår",
    "10 GB EU-roaming utan extra kostnad",
  ],
  oldPrice: "319 kr/mån.",
  newPrice: "49 kr/mån",
  tagLabel: "-180 kr",
  footnote:
    "Uppgradera, nedgradera eller avsluta — när som helst.\nGiltigt till: 2025-05-29",
  primaryLabel: "Label",
  secondaryLabel: "Label",
  imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop",
};

/* ==========================================================================
   SIZE VARIANTS
   ========================================================================== */

export const Large: Story = {
  name: "Large (900px)",
  args: {
    ...defaultProps,
    size: "large",
    showImage: true,
    showDismissIcon: true,
    secondaryButton: true,
  },
};

export const Medium: Story = {
  name: "Medium (700px)",
  args: {
    ...defaultProps,
    size: "medium",
    showImage: true,
    showDismissIcon: true,
    secondaryButton: true,
  },
};

export const Small: Story = {
  name: "Small (390px)",
  args: {
    ...defaultProps,
    size: "small",
    showImage: true,
    showDismissIcon: false,
    secondaryButton: true,
  },
};

/* ==========================================================================
   PROPERTY TOGGLES
   ========================================================================== */

export const LargeWithoutImage: Story = {
  name: "Large / No Image",
  args: {
    ...defaultProps,
    size: "large",
    showImage: false,
    showDismissIcon: true,
    secondaryButton: true,
  },
};

export const MediumWithoutImage: Story = {
  name: "Medium / No Image",
  args: {
    ...defaultProps,
    size: "medium",
    showImage: false,
    showDismissIcon: true,
    secondaryButton: true,
  },
};

export const SmallWithoutImage: Story = {
  name: "Small / No Image",
  args: {
    ...defaultProps,
    size: "small",
    showImage: false,
    secondaryButton: true,
  },
};

export const LargeWithoutDismiss: Story = {
  name: "Large / No Dismiss",
  args: {
    ...defaultProps,
    size: "large",
    showImage: true,
    showDismissIcon: false,
    secondaryButton: true,
  },
};

export const MediumWithoutDismiss: Story = {
  name: "Medium / No Dismiss",
  args: {
    ...defaultProps,
    size: "medium",
    showImage: true,
    showDismissIcon: false,
    secondaryButton: true,
  },
};

export const LargeWithoutSecondary: Story = {
  name: "Large / No Secondary Button",
  args: {
    ...defaultProps,
    size: "large",
    showImage: true,
    showDismissIcon: true,
    secondaryButton: false,
  },
};

export const MediumWithoutSecondary: Story = {
  name: "Medium / No Secondary Button",
  args: {
    ...defaultProps,
    size: "medium",
    showImage: true,
    showDismissIcon: true,
    secondaryButton: false,
  },
};

export const SmallWithoutSecondary: Story = {
  name: "Small / No Secondary Button",
  args: {
    ...defaultProps,
    size: "small",
    showImage: true,
    secondaryButton: false,
  },
};

/* ==========================================================================
   MINIMAL VARIANT
   ========================================================================== */

export const LargeMinimal: Story = {
  name: "Large / Minimal (no image, no dismiss, no secondary)",
  args: {
    ...defaultProps,
    size: "large",
    showImage: false,
    showDismissIcon: false,
    secondaryButton: false,
  },
};

/* ==========================================================================
   ALL SIZES COMPARISON
   ========================================================================== */

export const AllSizes: Story = {
  name: "All Sizes Comparison",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Side-by-side comparison of all three banner sizes with all properties enabled.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col items-start gap-12">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          LARGE (900px)
        </h3>
        <PromptBanner
          size="large"
          {...defaultProps}
          showDismissIcon
          secondaryButton
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          MEDIUM (700px)
        </h3>
        <PromptBanner
          size="medium"
          {...defaultProps}
          showDismissIcon
          secondaryButton
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          SMALL (390px)
        </h3>
        <PromptBanner
          size="small"
          {...defaultProps}
          secondaryButton
        />
      </div>
    </div>
  ),
};

/* ==========================================================================
   PROPERTY MATRIX
   ========================================================================== */

export const PropertyMatrix: Story = {
  name: "Property Matrix",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Shows the effect of toggling each boolean property on the large variant.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col items-start gap-12">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
          All Properties On
        </h3>
        <PromptBanner
          size="large"
          {...defaultProps}
          showImage
          showDismissIcon
          secondaryButton
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
          showImage: false
        </h3>
        <PromptBanner
          size="large"
          {...defaultProps}
          showImage={false}
          showDismissIcon
          secondaryButton
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
          showDismissIcon: false
        </h3>
        <PromptBanner
          size="large"
          {...defaultProps}
          showImage
          showDismissIcon={false}
          secondaryButton
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
          secondaryButton: false
        </h3>
        <PromptBanner
          size="large"
          {...defaultProps}
          showImage
          showDismissIcon
          secondaryButton={false}
        />
      </div>
    </div>
  ),
};
