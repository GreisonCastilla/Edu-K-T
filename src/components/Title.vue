<script setup>

 defineProps({
    grade: Object,
    })

</script>

<template>
    <div class="m-2">
        <p class="text-2xl mb-2">
           <b>{{ grade.name}}({{ grade.state }})</b> 
        </p>
        <p class="text-base ">
           <b>Director de grupo: </b> {{ grade.director.name }}
        </p>
        <p class="text-base">
            <b>Número telefónico: </b> {{ grade.director.tel }}
        </p>

    </div>
</template>

