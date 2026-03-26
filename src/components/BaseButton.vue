<template>
  <button
    type="button"
    :class="['base-button', `base-button--${variant}`, `base-button--${size}`]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])
</script>

<style scoped>
.base-button {
  font-family: inherit;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, opacity 0.2s;
}

.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Variants */
.base-button--primary {
  background-color: #3b82f6;
  color: #fff;
}
.base-button--primary:hover:not(:disabled) {
  background-color: #2563eb;
}

.base-button--secondary {
  background-color: #e5e7eb;
  color: #1f2937;
}
.base-button--secondary:hover:not(:disabled) {
  background-color: #d1d5db;
}

.base-button--danger {
  background-color: #ef4444;
  color: #fff;
}
.base-button--danger:hover:not(:disabled) {
  background-color: #dc2626;
}

/* Sizes */
.base-button--small {
  padding: 6px 12px;
  font-size: 12px;
}
.base-button--medium {
  padding: 10px 20px;
  font-size: 14px;
}
.base-button--large {
  padding: 14px 28px;
  font-size: 16px;
}
</style>
