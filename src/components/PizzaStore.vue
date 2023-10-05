<script setup lang="ts">
  import { pizzas } from '~~/db.json'
  const { addToCart } = useCart()
</script>
<template>
  <section class="pb-24 pt-12 text-center text-gray-50">
    <div class="container mx-auto px-4">
      <div class="bg-gray-50 px-12 py-16 relative rounded-lg text-gray-400">
        <FloatingCart></FloatingCart>
        <div class="-mx-4 flex flex-wrap items-center justify-center mb-12">
          <div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
            <h2 class="font-medium mb-1 text-primary-500">Our Menu</h2>
            <h3 class="capitalize font-bold text-4xl text-gray-900">
              Most Loved Items
            </h3>
          </div>
        </div>
        <div
          class="-mx-3 flex flex-wrap justify-center mb-12"
          data-pg-name="PizzaCard - Container"
        >
          <PizzaCard
            v-for="(pizza, index) in pizzas"
            :key="index"
            :description="pizza.description"
            :image="pizza.image"
            :name="pizza.name"
            :price="pizza.price"
            @add-to-cart="addToCart(pizza)"
          />
        </div>
        <div>
          <BaseButton label="Full Menu" size="lg"></BaseButton>
        </div>
      </div>
      <div
        class="bioIngredients max-w-screen-lg mx-auto py-12 z-10 md:flex"
        data-pg-collapsed
      >
        <div class="border-solid border-t pt-8 title mx-8 my-4 pb-4">
          <div class="flex flex-col gap-4 items-center title-container">
            <div class="bio-icon-container border-2 p-5 rounded-lg">
              <BaseIcon
                icon="i-simple-icons-biolink"
                size="xl"
                class="aspect-square box-content duration-500 ease-in h-60 hover:duration-200 hover:ease-out hover:transition-all inline-flex p-10 rounded-full text-emerald-900 transition-all"
                square
                name="i-emojione-biohazard"
                width="16px"
              ></BaseIcon>
            </div>
            <h3 class="dark:text-emerald-100 font-bold text-2xl text-green-700">
              Our hand picked Bio Products
            </h3>
          </div>
          <p
            class="border-b border-solid dark:text-cyan-50 font-sans leading-tight pb-8 px-8 text-base text-center text-zinc-800"
          >
            Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit
            amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <BioIngredients class="pt-2" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
