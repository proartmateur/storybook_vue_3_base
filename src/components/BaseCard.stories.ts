import BaseCard from './BaseCard.vue'
import BaseButton from './BaseButton.vue'

export default {
  title: 'Components/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
}

export const Default = {
  render: () => ({
    components: { BaseCard },
    template: '<BaseCard>Card content goes here.</BaseCard>',
  }),
}

export const WithHeader = {
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

export const WithHeaderAndFooter = {
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
