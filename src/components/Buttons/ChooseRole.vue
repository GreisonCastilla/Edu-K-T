<template>
    <div @click="role=!role" class="flex items-center drop-shadow-lg space-x-2 cursor-pointer w-fit ">
        <div  class="rounded-full w-14 p-2 drop-shadow-xl bg-gray-500 ">
            <div class="rounded-full w-5 h-5 p-2 bg-gray-700 transition duration-500 ease-linear drop-shadow-xl"
            :class="{'translate-x-full bg-white':role}"></div>
        </div>

        <span v-if="!role"><b>Estudiante</b></span>
        <span v-else><b>Profesor</b></span>

    </div>
    
</template>

<script setup>

    import { role } from '../../Composables/useRole';

</script>
