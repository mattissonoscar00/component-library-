import type { Meta, StoryObj } from "@storybook/react";
import { Button, ArrowForwardIcon } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible button component built with Radix UI Slot pattern and design tokens. Supports primary and secondary variants with lg (48px) and sm (40px) sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Visual style variant",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["lg", "sm"],
      description: "Button size: lg (48px height) or sm (40px height)",
      table: {
        defaultValue: { summary: "lg" },
      },
    },
    asChild: {
      control: "boolean",
      description: "Render as child element using Radix Slot (e.g., for links)",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "Button label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ==========================================================================
   PRIMARY VARIANTS
   ========================================================================== */

export const PrimaryLarge: Story = {
  name: "Primary / Large",
  args: {
    variant: "primary",
    size: "lg",
    children: "Label",
    suffixIcon: <ArrowForwardIcon size="lg" />,
  },
};

export const PrimarySmall: Story = {
  name: "Primary / Small",
  args: {
    variant: "primary",
    size: "sm",
    children: "Label",
    suffixIcon: <ArrowForwardIcon size="sm" />,
  },
};

/* ==========================================================================
   SECONDARY VARIANTS
   ========================================================================== */

export const SecondaryLarge: Story = {
  name: "Secondary / Large",
  args: {
    variant: "secondary",
    size: "lg",
    children: "Label",
    suffixIcon: <ArrowForwardIcon size="lg" />,
  },
};

export const SecondarySmall: Story = {
  name: "Secondary / Small",
  args: {
    variant: "secondary",
    size: "sm",
    children: "Label",
    suffixIcon: <ArrowForwardIcon size="sm" />,
  },
};

/* ==========================================================================
   WITHOUT ICON
   ========================================================================== */

export const PrimaryLargeNoIcon: Story = {
  name: "Primary / Large (No Icon)",
  args: {
    variant: "primary",
    size: "lg",
    children: "Stäng",
  },
};

export const PrimarySmallNoIcon: Story = {
  name: "Primary / Small (No Icon)",
  args: {
    variant: "primary",
    size: "sm",
    children: "Stäng",
  },
};

export const SecondaryLargeNoIcon: Story = {
  name: "Secondary / Large (No Icon)",
  args: {
    variant: "secondary",
    size: "lg",
    children: "Stäng",
  },
};

export const SecondarySmallNoIcon: Story = {
  name: "Secondary / Small (No Icon)",
  args: {
    variant: "secondary",
    size: "sm",
    children: "Stäng",
  },
};

/* ==========================================================================
   DISABLED STATES
   ========================================================================== */

export const PrimaryLargeDisabled: Story = {
  name: "Primary / Large / Disabled",
  args: {
    variant: "primary",
    size: "lg",
    children: "Label",
    suffixIcon: <ArrowForwardIcon size="lg" />,
    disabled: true,
  },
};

export const PrimarySmallDisabled: Story = {
  name: "Primary / Small / Disabled",
  args: {
    variant: "primary",
    size: "sm",
    children: "Label",
    suffixIcon: <ArrowForwardIcon size="sm" />,
    disabled: true,
  },
};

export const SecondaryLargeDisabled: Story = {
  name: "Secondary / Large / Disabled",
  args: {
    variant: "secondary",
    size: "lg",
    children: "Label",
    suffixIcon: <ArrowForwardIcon size="lg" />,
    disabled: true,
  },
};

export const SecondarySmallDisabled: Story = {
  name: "Secondary / Small / Disabled",
  args: {
    variant: "secondary",
    size: "sm",
    children: "Label",
    suffixIcon: <ArrowForwardIcon size="sm" />,
    disabled: true,
  },
};

/* ==========================================================================
   SIZE COMPARISON
   ========================================================================== */

export const SizeComparison: Story = {
  name: "Size Comparison",
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">PRIMARY</h3>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />}>
              Large
            </Button>
            <span className="text-xs text-gray-400">48px / 16px font</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary" size="sm" suffixIcon={<ArrowForwardIcon size="sm" />}>
              Small
            </Button>
            <span className="text-xs text-gray-400">40px / 14px font</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">SECONDARY</h3>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col items-center gap-2">
            <Button variant="secondary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />}>
              Large
            </Button>
            <span className="text-xs text-gray-400">48px / 16px font</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="secondary" size="sm" suffixIcon={<ArrowForwardIcon size="sm" />}>
              Small
            </Button>
            <span className="text-xs text-gray-400">40px / 14px font</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

/* ==========================================================================
   ALL VARIANTS MATRIX
   ========================================================================== */

export const AllVariants: Story = {
  name: "All Variants Matrix",
  render: () => (
    <div className="flex flex-col gap-8">
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left text-xs font-semibold text-gray-500">Variant / Size</th>
            <th className="p-2 text-center text-xs font-semibold text-gray-500">Default</th>
            <th className="p-2 text-center text-xs font-semibold text-gray-500">Disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-xs text-gray-500">Primary / Large</td>
            <td className="p-2">
              <Button variant="primary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />}>
                Label
              </Button>
            </td>
            <td className="p-2">
              <Button variant="primary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />} disabled>
                Label
              </Button>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-xs text-gray-500">Primary / Small</td>
            <td className="p-2">
              <Button variant="primary" size="sm" suffixIcon={<ArrowForwardIcon size="sm" />}>
                Label
              </Button>
            </td>
            <td className="p-2">
              <Button variant="primary" size="sm" suffixIcon={<ArrowForwardIcon size="sm" />} disabled>
                Label
              </Button>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-xs text-gray-500">Secondary / Large</td>
            <td className="p-2">
              <Button variant="secondary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />}>
                Label
              </Button>
            </td>
            <td className="p-2">
              <Button variant="secondary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />} disabled>
                Label
              </Button>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-xs text-gray-500">Secondary / Small</td>
            <td className="p-2">
              <Button variant="secondary" size="sm" suffixIcon={<ArrowForwardIcon size="sm" />}>
                Label
              </Button>
            </td>
            <td className="p-2">
              <Button variant="secondary" size="sm" suffixIcon={<ArrowForwardIcon size="sm" />} disabled>
                Label
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

/* ==========================================================================
   INTERACTION STATES
   ========================================================================== */

export const InteractionStates: Story = {
  name: "Interaction States",
  parameters: {
    docs: {
      description: {
        story:
          "Hover over buttons to see hover state. Click and hold to see pressed state. Tab to see focus state.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-gray-50 rounded-lg">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
          Primary Button States
        </h3>
        <p className="text-xs text-gray-400 mb-4">
          Default (#611f69) → Hover (#814c87) → Pressed (#45164b) → Focus (ring) →
          Disabled (#b698ba, 80% opacity)
        </p>
        <div className="flex gap-4 items-center">
          <Button variant="primary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />}>
            Large
          </Button>
          <Button variant="primary" size="sm" suffixIcon={<ArrowForwardIcon size="sm" />}>
            Small
          </Button>
          <Button variant="primary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />} disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
          Secondary Button States
        </h3>
        <p className="text-xs text-gray-400 mb-4">
          Default (white) → Hover (#efe9f0) → Focus (ring) → Disabled (40% opacity)
        </p>
        <div className="flex gap-4 items-center">
          <Button variant="secondary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />}>
            Large
          </Button>
          <Button variant="secondary" size="sm" suffixIcon={<ArrowForwardIcon size="sm" />}>
            Small
          </Button>
          <Button variant="secondary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />} disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
};

/* ==========================================================================
   AS CHILD (LINK) EXAMPLE
   ========================================================================== */

export const AsLink: Story = {
  name: "As Link (asChild)",
  parameters: {
    docs: {
      description: {
        story:
          "Using the `asChild` prop with Radix Slot to render as an anchor tag while maintaining button styles.",
      },
    },
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Button asChild variant="primary" size="lg">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <span>Large Link</span>
          <ArrowForwardIcon size="lg" />
        </a>
      </Button>
      <Button asChild variant="secondary" size="sm">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <span>Small Link</span>
          <ArrowForwardIcon size="sm" />
        </a>
      </Button>
    </div>
  ),
};

/* ==========================================================================
   UPGRADE PROMPT CTA EXAMPLE
   ========================================================================== */

export const UpgradePromptCTA: Story = {
  name: "Upgrade Prompt CTA",
  parameters: {
    docs: {
      description: {
        story:
          "Example of buttons as used in the Upgrade Prompt component with Swedish labels.",
      },
    },
  },
  render: () => (
    <div
      className="flex flex-col gap-4 p-6 rounded-lg"
      style={{ backgroundColor: "var(--color-container-default)" }}
    >
      <div className="flex gap-2">
        <span className="text-xs text-gray-500">Large buttons:</span>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" size="lg">Stäng</Button>
        <Button variant="primary" size="lg" suffixIcon={<ArrowForwardIcon size="lg" />}>
          Uppgradera nu
        </Button>
      </div>
      
      <div className="flex gap-2 mt-4">
        <span className="text-xs text-gray-500">Small buttons:</span>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm">Stäng</Button>
        <Button variant="primary" size="sm" suffixIcon={<ArrowForwardIcon size="sm" />}>
          Uppgradera nu
        </Button>
      </div>
    </div>
  ),
};
