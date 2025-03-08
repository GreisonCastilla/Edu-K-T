

<script setup>
  import data from "../../subjects.json";
  import HeaderMain from "../../components/structure/HeaderMain.vue";
  import ActivityWindow from "../../components/ActivitiesWindow/ActivityWindow.vue";
  import Back from "../../components/Buttons/Back.vue";
  import SideBar from "../../components/structure/SideBar.vue";
  import Hero from "../../components/structure/Hero.vue";

  import { useRoute } from "vue-router";
  import { ref } from "vue";
  import { showSideBar } from "../../Composables/useSideBar";
  
  let route = useRoute()
  let title = route.params.subject

  let subject = ref(data.find(x=>x.name == title))

</script>

<template>

  <div class="flex flex-col min-h-screen w-screen">

    <Hero />

    <div class=" max-h-full flex grow max-w-full ">

      <SideBar />

      <div
        class="p-5 transition-all duration-500 ease-in-out absolute md:relative w-full"
        :class="{' md:relative md:-translate-x-44 transition-all duration-500 ease-in-out min-w-full':!showSideBar}"
      >
        <Back/>
        <HeaderMain :data="subject" />
        <ActivityWindow :data="subject.activities" class="mt-3"/>
      </div>

    </div>

  </div>
</template>