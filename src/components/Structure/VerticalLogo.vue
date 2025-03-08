<template>

  <div class="flex flex-col items-center">
    <svg
      class=" w-28 h-28 md:w-22 fill-current transition ease-linear duration-500 dark:text-white"
      :class="{'text-gray-700':!role}"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z"
        clip-rule="evenodd"
      />
    </svg>

    <p
      class="text-3xl transition ease-linear duration-500"
      :class="{'text-white transition ease-linear duration-500':!role}"
    >Edu K-T</p>
    <p
      class="md:text-xl text-center text-base transition ease-linear duration-500"
      :class="{'text-white transition ease-linear duration-500':!role}"
    >Institución Educativa Técnica Industrial Don Bosco</p>
  </div>

</template>

<script setup>
  import { role } from '../../Composables/useRole';
</script>
