import type { Meta, StoryObj } from '@storybook/vue3'
import BaseCard from './BaseCard.vue'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseCard> = {
  title: 'Components/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { BaseCard },
    template: '<BaseCard>Card content goes here.</BaseCard>',
  }),
}

export const WithHeader: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard>
        <template #header>Card Title</template>
        This is the card body content.
      </BaseCard>
    `,
  }),
}

export const WithHeaderAndFooter: Story = {
  render: () => ({
    components: { BaseCard, BaseButton },
    template: `
      <BaseCard>
        <template #header>Card Title</template>
        This is the card body with header and footer.
        <template #footer>
          <BaseButton size="small">Action</BaseButton>
        </template>
      </BaseCard>
    `,
  }),
}
