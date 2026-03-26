import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import MyButton from './Button.vue'

const meta: Meta<typeof MyButton> = {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { primary: true, label: 'Button' },
}

export const Secondary: Story = {
  args: { label: 'Button' },
}

export const Large: Story = {
  args: { size: 'large', label: 'Button' },
}

export const Small: Story = {
  args: { size: 'small', label: 'Button' },
}
