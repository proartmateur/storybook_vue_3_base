import type { Meta, StoryObj } from '@storybook/vue3'
import BaseAlert from './BaseAlert.vue'

type BaseAlertArgs = {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'destructive'
  title?: string
  default?: string
}

const meta: Meta<BaseAlertArgs> = {
  title: 'Components/BaseAlert',
  component: BaseAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'destructive'],
    },
    title: { control: 'text' },
    default: { control: 'text', description: 'Slot content' },
  },
  args: {
    title: 'Alert title',
    default: 'This is the alert description.',
  },
  render: (args) => ({
    components: { BaseAlert },
    setup() {
      return { args }
    },
    template: `<BaseAlert v-bind="args">{{ args.default }}</BaseAlert>`,
  }),
}

export default meta
type Story = StoryObj<BaseAlertArgs>

export const Default: Story = {
  args: { variant: 'default' },
}

export const Info: Story = {
  args: { variant: 'info', title: 'Heads up!' },
}

export const Success: Story = {
  args: { variant: 'success', title: 'All done!' },
}

export const Warning: Story = {
  args: { variant: 'warning', title: 'Watch out!' },
}

export const Destructive: Story = {
  args: { variant: 'destructive', title: 'Something went wrong!' },
}

export const AllVariants: Story = {
  render: () => ({
    components: { BaseAlert },
    template: `
      <div class="flex flex-col gap-3 p-4">
        <BaseAlert variant="default"     title="Default">Everything looks fine.</BaseAlert>
        <BaseAlert variant="info"        title="Info">You have a new message.</BaseAlert>
        <BaseAlert variant="success"     title="Success">Your changes have been saved.</BaseAlert>
        <BaseAlert variant="warning"     title="Warning">Your session is about to expire.</BaseAlert>
        <BaseAlert variant="destructive" title="Error">Failed to delete the record.</BaseAlert>
      </div>
    `,
  }),
}
