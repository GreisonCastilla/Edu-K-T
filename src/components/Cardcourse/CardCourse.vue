<script setup>

  import ShowGrade from './ShowGrade.vue';

  defineProps({
    course: Object,
  })

</script>

<template>

  <a href="/">
    <div class="relative m-3 ease-in-out hover:scale-110 duration-500 max-w-80 min-h-40 hover:transition-all">
    <div class="shadow absolute -inset-0 bg-black blur opacity-30 rounded-lg">

    </div>
    <div class=" card-course cursor-pointer flex relative flex-col bg-white p-4 min-w-80 min-h-40 rounded-lg">
      
      <div class="card-title select-none">
        <p class="text-base"><b>{{course.name}}</b></p>
        <p class="text-sm">{{course.teacher}}</p>
      </div>

      <div class="activities min-h-16 mt-2 ml-2 bg-white grow">
        <div v-if="course.activities.length>2"  class="flex-col ">
          <p  class="text-blue-700 text-sm " v-for="activity in 2" :key="activity">
          {{ course.activities[activity-1] }}
          </p>
          <p class="text-blue-700 text-sm ">mas...</p>
        </div>

        <div v-else-if="course.activities.length>=1">
          <p  class="text-blue-700 text-sm " v-for="activity in course.activities" :key="activity">
          {{ activity }}
          </p>
        </div>

        <p v-else class="text-sm">
          <b>
            No Hay actividades pendientes
          </b>
        </p>
      </div>

      <div class="prom-grade h-6 justify-items-end ">
        <ShowGrade :average="course.average"></ShowGrade>
      </div>

    </div>

  </div>

  </a>

  

</template>
