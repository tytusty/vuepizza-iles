<script setup lang="ts" v-for>
  const bioIngredients = [
    {
      icon: 'i-ri-alarm-warning-line',
      number: '1',
      name: 'Farina del sacco',
    },
    {
      icon: 'i-ri-arrow-turn-forward-line',
      number: '2',
      name: 'Farina del cane',
    },
    {
      icon: 'i-ri-attachment-line',
      number: '3',
      name: 'Farina del Vento',
    },
  ]
</script>
<template>
    <ul class="flex flex-wrap gap-x-12 gap-y-6 ingregients justify-center">
        <BioIngredient v-for="(ingredient, index) in bioIngredients" :key="index" :name="ingredient.name" :number="ingredient.number" :icon="ingredient.icon"/>
    </ul>
</template>
<style scoped></style>
