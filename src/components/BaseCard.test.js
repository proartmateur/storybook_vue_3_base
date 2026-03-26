import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import BaseCard from './BaseCard.vue'

describe('BaseCard', () => {
  it('renders default slot content', () => {
    render(BaseCard, { slots: { default: 'Card body' } })
    expect(screen.getByText('Card body')).toBeInTheDocument()
  })

  it('renders header slot when provided', () => {
    render(BaseCard, {
      slots: {
        header: 'My Title',
        default: 'Body text',
      },
    })
    expect(screen.getByText('My Title')).toBeInTheDocument()
    expect(screen.getByText('Body text')).toBeInTheDocument()
  })

  it('renders footer slot when provided', () => {
    render(BaseCard, {
      slots: {
        default: 'Content',
        footer: 'Footer info',
      },
    })
    expect(screen.getByText('Footer info')).toBeInTheDocument()
  })

  it('does not render header section when no header slot', () => {
    const { container } = render(BaseCard, {
      slots: { default: 'Just body' },
    })
    expect(container.querySelector('.base-card__header')).not.toBeInTheDocument()
  })

  it('does not render footer section when no footer slot', () => {
    const { container } = render(BaseCard, {
      slots: { default: 'Just body' },
    })
    expect(container.querySelector('.base-card__footer')).not.toBeInTheDocument()
  })
})
