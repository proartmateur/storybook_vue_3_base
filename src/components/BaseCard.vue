<template>
  <div class="base-card">
    <div v-if="$slots.header" class="base-card__header">
      <slot name="header" />
    </div>
    <div class="base-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="base-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.base-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.base-card__header {
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
}

.base-card__body {
  padding: 16px;
}

.base-card__footer {
  padding: 16px;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
}
</style>
