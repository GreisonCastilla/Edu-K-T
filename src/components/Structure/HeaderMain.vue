<script setup>
    import Title from './Title.vue';
    import Indicator from '../Indicator.vue';
    import ShowGrade from '../Cardcourse/ShowGrade.vue';


    defineProps({
        data: Object,
    })

</script>

<template>
    <div class="flex-col space-y-3 md:flex md:flex-row items-start ">
        <div class="flex-col grow">
            <Title :data="data" />
            <Indicator class="mt-4 mb-4" />
        </div>

        <div class="flex space-x-3 items-center ml-2 ">
            <span><b>Promedio</b></span>
            <ShowGrade :average="data.average" />
        </div>
    </div>  
</template>



