<script setup>

 defineProps({
    grade: Object,
    })

</script>

<template>
    <div class="m-2">
        <p class="text-2xl mb-2">
           <b v-if="grade.state">{{ grade.name}} (En curso)</b>
           <b v-else>{{ grade.name}} (Finalizado)</b>
        </p>
        <p class="text-base ">
           <b>Director de grupo: </b> {{ grade.director.name }}
        </p>
        <p class="text-base">
            <b>Número telefónico: </b> {{ grade.director.tel }}
        </p>
        <p class="text-base">
            <b>Horario de Atención: </b> {{ grade.director.schedule }}
        </p>
    </div>
</template>

