import React from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.css';

const preview: Preview = {
  globalTypes: {
    brand: {
      description: 'Brand theme (Figma variable mode)',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'zapp', title: 'Zapp (Budget)', icon: 'lightning' },
          { value: 'saga', title: 'Saga (Premium)', icon: 'starhollow' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    brand: 'zapp',
  },

  decorators: [
    (Story, context) => {
      const brand = context.globals.brand || 'zapp';

      return (
        <div
          data-brand={brand}
          style={{ padding: '1rem', fontFamily: 'var(--font-family-base)' }}
        >
          <Story />
        </div>
      );
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
