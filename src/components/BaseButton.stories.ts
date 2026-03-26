import BaseButton from './BaseButton.vue'

export default {
  title: 'Components/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    default: { control: 'text', description: 'Slot content' },
  },
  args: {
    default: 'Button',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">{{ args.default }}</BaseButton>',
  }),
}

export const Primary = {
  args: {
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    variant: 'secondary',
  },
}

export const Danger = {
  args: {
    variant: 'danger',
  },
}

export const Small = {
  args: {
    size: 'small',
  },
}

export const Large = {
  args: {
    size: 'large',
  },
}

export const Disabled = {
  args: {
    disabled: true,
  },
}
