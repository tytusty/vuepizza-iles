<script setup lang="ts" v-for>
  const bioIngredients = [
    {
      number: '1',
      name: 'Farina del sacco',
    },
    {
      number: '2',
      name: 'Farina del cane',
    },
    {
      number: '3',
      name: 'Farina del Vento',
    },
  ]
</script>
<template>
    <ul class="flex flex-wrap gap-x-12 gap-y-6 ingregients justify-center">
        <BioIngredient v-for="(ingredient, index) in bioIngredients" :name="ingredient.name" :number="ingredient.number"/>
    </ul>
</template>
<style scoped></style>
