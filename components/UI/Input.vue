<template>
  <div>
    <label
      for=""
      v-if="props.label"
      class="block pl-3 ml-px text-sm text-gray-700"
      >{{ props.label }}</label
    >
    <input
      class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :type="props.type"
      @input="(event) => emits('update:modelValue', event.target.value)"
    />
  </div>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: null,
  },
});
</script>
