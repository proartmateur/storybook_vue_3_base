import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('renders slot content', () => {
    render(BaseButton, { slots: { default: 'Click me' } })
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('applies the primary variant class by default', () => {
    render(BaseButton, { slots: { default: 'Button' } })
    expect(screen.getByRole('button')).toHaveClass('base-button--primary')
  })

  it('applies the correct variant class', () => {
    render(BaseButton, {
      props: { variant: 'danger' },
      slots: { default: 'Delete' },
    })
    expect(screen.getByRole('button')).toHaveClass('base-button--danger')
  })

  it('applies the correct size class', () => {
    render(BaseButton, {
      props: { size: 'large' },
      slots: { default: 'Big' },
    })
    expect(screen.getByRole('button')).toHaveClass('base-button--large')
  })

  it('is disabled when disabled prop is true', () => {
    render(BaseButton, {
      props: { disabled: true },
      slots: { default: 'Nope' },
    })
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('emits click event when clicked', async () => {
    const user = userEvent.setup()
    const { emitted } = render(BaseButton, { slots: { default: 'Go' } })

    await user.click(screen.getByRole('button'))
    expect(emitted()).toHaveProperty('click')
  })

  it('does not emit click when disabled', async () => {
    const user = userEvent.setup()
    const { emitted } = render(BaseButton, {
      props: { disabled: true },
      slots: { default: 'No' },
    })

    await user.click(screen.getByRole('button'))
    expect(emitted()).not.toHaveProperty('click')
  })
})
