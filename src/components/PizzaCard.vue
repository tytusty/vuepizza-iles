<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default:
        ' Sto cazzo Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    image: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIxfHxwaXp6YXxlbnwwfHx8fDE2MzEwODA3Njg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop',
    },
    price: {
      type: String,
      required: true,
    },
  })

  const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  const addToCart = () => {
    emit('addToCart')
  }
</script>
<template>
  <div class="p-3 w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
    <div
      class="bg-white border px-6 py-12 rounded-md text-center text-gray-400"
    >
      <img
        class="mb-4 mx-auto rounded-md w-full sm:w-10/12"
        alt="..."
        width="600"
        height="600"
        :src="image"
      />
      <h4 class="font-bold mb-2 text-gray-900 text-xl">{{ name }}</h4>
      <p class="mb-2 text-sm">{{ description }}</p>
      <p
        class="font-semibold font-serif mb-4 text-primary-500"
        data-pg-collapsed
      >
        {{ price }}
      </p>
      <BaseButton label="Order Now" size="md" @click="addToCart">
        <template #trailing>
          <BaseIcon name="i-ic-sharp-shopping-bag" width="20px"></BaseIcon>
        </template>
      </BaseButton>
    </div>
  </div>
</template>
<style scoped></style>
