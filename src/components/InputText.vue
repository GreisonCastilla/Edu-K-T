<template>
  <div class="flex-col w-full group mt-12">

    <label
      class="absolute group-focus-within:-translate-y-5
      transition ease-linear duration-500"
      :class="{'-translate-y-5':text!==''}"
      :for="id"
    >{{ id }}</label>

    <input
      class="border-b-2 border-gray-500 focus:border-blue-500 bg-transparent
            outline-none transition-all duration-500 w-full p-1 focus:text-blue-500
             "
        :class="{'text-blue-500':text!==''}"
      :id="id"
      v-model="text"
      :type="type"
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  id: String,
  type: String,
});

let text = ref("");
</script>
