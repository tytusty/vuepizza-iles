<script setup lang="ts">
  const pizzas = [
    {
      name: 'Ciccio Pissa',
      price: '$ 10.00',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Analebt Maldon',
      price: '$ 10.00',
      image:
        'https://images.unsplash.com/photo-1609159085820-d9a6ff0f469e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIyM3x8cGl6emF8ZW58MHx8fHwxNjMxMDkyMTUz&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Mestolinta Badazel',
      price: '$ 10.00',
      image:
        'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDYyfHxwaXp6YXxlbnwwfHx8fDE2MzEwODA4NzU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Stockfis Island',
      price: '$ 10.00',
      image:
        'https://images.unsplash.com/photo-1564936281291-294551497d81?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyNXx8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'La Salamandra',
      price: '$ 11.00',
      image:
        'https://images.unsplash.com/photo-1565564194296-14db6e0bf8a3?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwMnx8cGl6emF8ZW58MHx8fHwxNjMxMDgwOTQw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Analebt Maldon',
      price: '$ 12.00',
      image:
        'https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyOXx8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Mestolinta Badazel',
      price: '$ 15.00',
      image:
        'https://images.unsplash.com/photo-1620894599483-aefd71cb525f?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzMXx8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Astrakan Caffe',
      price: '$ 13.00',
      image:
        'https://images.unsplash.com/photo-1572785031839-8d006462dcd4?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyN3x8cGl6emF8ZW58MHx8fHwxNjMxMDkyMDgy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  const cart = ref([])
  const addToCart = (pizza) => {
    console.log(pizza + ' added to cart')
    cart.value.push(pizza)
  }

  const cartText = computed(() => {
    const displayText =
      cart.value.length === 0
        ? 'Cart is empty'
        : `Total ${cart.value.length} items`
    return displayText
  })
</script>
<template>
  <section class="pb-24 pt-12 text-center text-gray-50">
    <div class="container mx-auto px-4">
      <div class="bg-gray-50 px-12 py-16 relative rounded-lg text-gray-400">
        <BaseButton
          label="My Button"
          class="bg-neutral-50 duration-75 ease-out mb-10 right-0 sticky top-12 transition-all z-10"
          size="lg"
          leading-icon="i-material-symbols-shopping-basket"
          data-pg-collapsed
          variant="outline"
          ><span>{{ cartText }}</span>
        </BaseButton>
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
