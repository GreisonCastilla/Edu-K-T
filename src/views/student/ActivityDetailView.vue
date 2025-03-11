


<template>
  <div class=" max-h-full flex grow max-w-full ">
    <div v-if="subject == null || activity == null">
      no se encontro la tarea
    </div>

    <div v-else class="flex flex-col min-h-screen w-screen">

      <Hero />

      <div class=" max-h-full flex grow max-w-full ">

        <SideBar />

        <div
          class="p-5 transition-all duration-500 ease-in-out absolute md:relative w-full"
          :class="{' md:relative md:-translate-x-44 transition-all duration-500 ease-in-out min-w-full':!showSideBar}"
        >
          <Back />
          <HeaderActivity :subject="title" :data="activity"/>
            
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import data from "../../subjects.json";
import { useRoute } from "vue-router";
import { ref } from "vue";
import SideBar from "../../components/structure/SideBar.vue";
import Back from "../../components/Buttons/Back.vue";
import Hero from "../../components/structure/Hero.vue";
import { showSideBar } from "../../composables/useSideBar";
import HeaderActivity from "../../components/Structure/HeaderActivity.vue";

let route = useRoute();
let title = route.params.subject;

let subject = data.find((x) => x.name == title);
console.log(subject);
let activity = ref(null);

let act = route.params.activity;
try {
  activity = ref(subject.activities.find((x) => x.name == act));
} catch (error) {
  console.error(error);
}
</script>
