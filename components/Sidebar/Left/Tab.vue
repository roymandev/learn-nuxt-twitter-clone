<template>
  <NuxtLink
    to="#"
    class="flex items-center p-3 hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 dark:text-white w-min"
    :class="defaultTranstition"
  >
    <div class="w-6 h-6">
      <slot name="icon" />
    </div>
    <div class="ml-4 text-xl hidden xl:block" :class="textClasses">
      <slot name="name" />
    </div>
  </NuxtLink>
</template>

<script setup>
const { defaultTranstition } = useTailwindConfig();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textClasses = computed(() =>
  props.active ? "font-semibold" : "font-normal"
);
</script>
