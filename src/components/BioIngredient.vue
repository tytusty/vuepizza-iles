<script setup lang="ts">
  defineProps({
    number: {
      type: String,
      default: 'One',
    },
    name: {
      type: String,
      default: 'Farina del sacco',
    },
  })

  //
  //<span class="iconify" data-icon="fluent:food-egg-24-filled" data-inline="false"></span>
  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
</script>
<template>
    <li class="flex flex-col ingredient items-center">
        <div class="aspect-square border-2 border-solid font-black font-sans mb-3 p-5 rounded-full text-3xl text-center text-green-950 w-24">
            <h5 class="inline-block">{{ number }}</h5>
        </div>
        <p class="font-bold leading-tight text-teal-900 text-xl">{{ name }}</p>
    </li>
</template>
<style language="scss" scoped></style>
