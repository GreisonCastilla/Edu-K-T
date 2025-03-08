<script setup>

    import CardCourse from '../../components/Cardcourse/CardCourse.vue';
    import data from '../../courses.json'
    import SideBar from '../../components/structure/SideBar.vue';
    import Hero from '../../components/structure/Hero.vue';
    import HeaderMain from '../../components/structure/HeaderMain.vue';
    import FloatButton from '../../components/buttons/FloatButton.vue'

    import { selected } from '../../Composables/useSelected';
    import { showSideBar } from '../../Composables/useSideBar';
    


</script>

<template>
    
    <div class="flex flex-col min-h-screen w-screen">

        <Hero/>

        <div class=" max-h-full flex grow max-w-full">
            
            <SideBar/>
            
            <div class="p-5 transition-all duration-500 ease-in-out absolute md:relative w-full" 
            :class="{' md:relative md:-translate-x-44 transition-all duration-500 ease-in-out min-w-full':!showSideBar}"
            >
                <HeaderMain :data="data[selected]"/>
                
                <div class="flex flex-wrap mt-3 justify-center md:justify-normal">
                    <CardCourse :course="course" v-for="course in data[selected].courses" :key="course"/>
                </div>
                <FloatButton/>
            </div>

            
        </div>

    </div>

    
</template>