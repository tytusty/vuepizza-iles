<script setup lang="ts">
  const currentRoute = useRoute()
</script>
<template :class="[isActive ? 'active-class' : '', 'error-class']">
  <div>
    <MetaTags />
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar
        :class="[currentRoute.path === '/' ? 'absolute z-10' : '', '']"
      ></NavBar>
      <div class="shadow">
        <slot />
      </div>
      <TheFooter client:none></TheFooter>
    </div>
  </div>
</template>
<style></style>
