<template>
    <div class="px-6 sm:px-0 max-w-sm drop-shadow-lg">
        <div class=" max-w-sm px-6 border-2 border-gray-500 cursor-pointer z-10 p-2 rounded-lg bg-gray-500 hover:bg-white group transition-all duration-500 ease-in-out hover:border-2 hover:border-gray-500">
            <p class="text-sm text-white group-hover:text-gray-500 text-center">{{ action }}</p>
        </div>
    </div>
 
</template>

<script setup>
    defineProps({
        action:String
    })
</script>

