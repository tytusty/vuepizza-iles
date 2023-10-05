<script setup lang="ts">
  import { useCart } from '@/composables/cart'
  const { cartText } = useCart()
</script>
<template>
  <BaseButton
    label="My Button"
    class="bg-neutral-50 duration-75 ease-out mb-10 right-0 sticky top-12 transition-all z-10"
    size="lg"
    leading-icon="i-material-symbols-shopping-basket"
    data-pg-collapsed
    variant="outline"
    ><span>{{ cartText }}</span>
  </BaseButton>
</template>
<style scoped></style>
