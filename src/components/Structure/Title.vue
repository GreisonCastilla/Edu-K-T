<script setup>
 defineProps({
    data: Object,
})

</script>

<template>
    <div>
        <p class="text-2xl mb-2">
           <b>{{ data.name}}</b>
           
        </p>
        <p class="text-base ">
           <b>Director de grupo: </b> {{ data.director.name }}
        </p>
        <p class="text-base">
            <b>Número telefónico: </b> {{ data.director.tel }}
        </p>
        <p class="text-base">
            <b>Horario de Atención: </b> {{ data.director.schedule }}
        </p>
    </div>
</template>

