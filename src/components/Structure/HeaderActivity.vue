<template>
  <div class="flex-col space-y-3 md:flex md:flex-row items-start ">
    <div class="flex-col grow">
      <p class="text-2xl mb-2">
        <b>{{subject}} - {{ data.name}}</b>
      </p>
      <p class="text-base mb-2">
        <b>Fecha de entrega: </b> {{ data.dueDate }}
      </p>
      <Indicator class="mt-4 mb-4" />
    </div>

    <div class="flex space-x-3 items-center ml-2 ">
      <span><b>Nota</b></span>
      <ShowGrade :average="data.average" />
    </div>
  </div>
</template>

<script setup>
    import ShowGrade from '../Cardcourse/ShowGrade.vue';

    defineProps({
        subject:String,
        data:Object
    })
</script>
