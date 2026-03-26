import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3'
import { Quasar } from 'quasar'

// Import Quasar icon set (material icons)
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar base CSS (animations, transitions, etc.)
import 'quasar/src/css/index.sass'

// Install Quasar into the Storybook Vue app
setup((app) => {
  app.use(Quasar, {
    plugins: {}, // Add Quasar plugins here as needed (Notify, Dialog, etc.)
  })
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;