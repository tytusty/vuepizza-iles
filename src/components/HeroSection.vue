<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
</script>
<template>
  <section class="poster relative text-gray-300">
    <header>
      <div class="container mx-auto relative"></div>
    </header>
    <div class="container mx-auto pb-72 pt-48 px-4">
      <div
        class="-mx-4 flex flex-wrap items-center justify-center space-y-6 lg:space-y-0"
      >
        <div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
          <p class="font-bold font-serif mb-1 text-2xl text-white">
            Are You Hungry?
          </p>
          <h1
            class="drop-shadow-lg font-bold mb-6 text-4xl text-white md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl"
            style="text-shadow: 0px 9px 11px #1c0b0b"
          >
            Fill your Tummy with the Yummiest Pizza in the helloWorld
          </h1>
          <BaseButton label="Order Now!" size="lg"></BaseButton>
          <BaseButton
            label="Our Menu"
            size="lg"
            style="margin-left: 10px"
            variant="soft"
          ></BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
