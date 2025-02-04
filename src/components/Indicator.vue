<script setup>
import InfoIcon from './InfoIcon.vue';

let message = "Bueno: Promedio >= 4.0\nModerado: 4.0 < Promedio > 3.0\nMalo: Promedio <= 2.9"
</script>

<template>
    <div class="flex flex-wrap space-y-3 space-x-0 md:space-x-4 md:space-y-0  select-none">

        <div class="flex space-x-1 align-middle">
            <InfoIcon :message="message"></InfoIcon>
            <span class="text-base"><b>Indicador de rendimiento</b></span>
        </div>

        <div class="flex space-x-4">
            <div class="good flex">
                <div class="h-5 w-5 rounded-full bg-green-400"></div>
                <span class="text-sm ml-1.5">Bueno</span>
            </div>

            <div class="moderate flex">
                <div class="h-5 w-5 rounded-full bg-yellow-400"></div>
                <span class="text-sm ml-2">Moderado</span>
            </div>

            <div class="bad flex">
                <div class="h-5 w-5 rounded-full bg-red-500"></div>
                <span class="text-sm ml-2">Malo</span>
            </div>
        </div>
        
    </div>

</template>