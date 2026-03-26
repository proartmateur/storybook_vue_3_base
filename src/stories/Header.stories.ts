import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import MyHeader from './Header.vue'

const meta: Meta<typeof MyHeader> = {
  title: 'Example/Header',
  component: MyHeader,
  tags: ['autodocs'],
  render: (args) => ({
    components: { MyHeader },
    setup() {
      return { ...args }
    },
    template: '<my-header :user="user" />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: { name: 'Jane Doe' },
  },
}

export const LoggedOut: Story = {
  args: {
    user: null as unknown as undefined,
  },
}
