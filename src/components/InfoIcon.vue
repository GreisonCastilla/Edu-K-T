<script setup>

    defineProps({
    message: String,
    })

</script>

<template>
    <div :title="message" class="relative group">
        <svg class="info h-5 w-5 mt-0.5 fill-gray-700 cursor-help"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path>
        </svg>
    </div>
</template>
