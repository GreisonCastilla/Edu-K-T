<script setup>
    import Title from './Title.vue';
    import Indicator from './Indicator.vue';
    import ShowGrade from './Cardcourse/ShowGrade.vue';
    import { actualGrade } from '../composables/useGrades';

    defineProps({
        data: Object,
    })

    let average = 3.66
</script>

<template>
    <div class="flex-col space-y-3 md:flex md:flex-row items-start ">
        <div class="flex-col grow">
            <Title :grade="data[actualGrade]"></Title>
            <Indicator class="ml-2 mt-6 mb-6"></Indicator>
        </div>

        <div class="flex space-x-3 items-center ml-2 "
        
        >
            <span><b>Promedio Acumulado</b></span>
            <ShowGrade :average="average"></ShowGrade>
        </div>
    </div>  
</template>



