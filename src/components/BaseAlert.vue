<template>
  <div :class="cn(alertVariants({ variant }))" role="alert">
    <p v-if="title" class="font-semibold leading-none tracking-tight mb-1">
      {{ title }}
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'rounded-lg border px-4 py-3 text-sm',
  {
    variants: {
      variant: {
        default:     'bg-white text-slate-900 border-slate-200',
        info:        'bg-blue-50 text-blue-900 border-blue-200',
        success:     'bg-green-50 text-green-900 border-green-200',
        warning:     'bg-yellow-50 text-yellow-900 border-yellow-200',
        destructive: 'bg-red-50 text-red-900 border-red-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type AlertVariants = VariantProps<typeof alertVariants>

withDefaults(
  defineProps<{
    variant?: AlertVariants['variant']
    title?: string
  }>(),
  {
    variant: 'default',
  }
)
</script>
