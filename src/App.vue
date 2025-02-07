<script setup>

    import CardCourse from './components/Cardcourse/CardCourse.vue';
    import data from './courses.json'
    import SideBar from './components/SideBar.vue';
    import Hero from './components/Hero.vue';
    import HeaderMain from './components/HeaderMain.vue';

    import { actualGrade } from './composables/useGrades';
    import { showSideBar } from './composables/useSideBar';

</script>

<template>
    
    <div class="flex flex-col min-h-screen ">

        <Hero></Hero>

        <div class=" min-h-full flex grow min-w-full">
            
            <SideBar ></SideBar>
            
            <div class="p-5 transition-all  duration-500 ease-in-out absolute md:relative w-full" 
            :class="{' md:relative md:-translate-x-44 transition-all duration-500 ease-in-out min-w-full':!showSideBar}"
            >
                <HeaderMain :data="data"></HeaderMain>
                
                <div class="flex flex-wrap mt-3 justify-center md:justify-normal">
                    <CardCourse :course="course" v-for="course in data[actualGrade].courses" :key="course">
                    </CardCourse>
                </div>

            </div>


        </div>

    </div>


    
    
</template>


