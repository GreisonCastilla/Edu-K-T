<script setup>

    defineProps({
        average: Number,
    })

</script>

<template>

    <div class="average select-none">

        <div v-if="average==null">
            <b class="text-sm">no hay calificaciones</b>
        </div>

        <div v-else-if="average>=4.0" class="grade h-6 w-14 bg-green-400 rounded-lg  items-center flex">
        <p class="text-white h-6 text-sm pt-0.5 mt-1 text-center w-full">{{average}}/5</p>
        </div>

        <div v-else-if="average>=3.0" class="grade h-6 w-14 bg-yellow-400 rounded-lg  items-center flex">
            <p class="text-white h-6 text-sm pt-0.5 mt-1 text-center w-full">{{average}}/5</p>
        </div>

        <div v-else class="grade h-6 w-14 bg-red-500 rounded-lg  items-center flex">
            <p class="text-white h-6 text-sm pt-0.5 mt-1 text-center w-full">{{average}}/5</p>
        </div>

    </div>
    

</template>