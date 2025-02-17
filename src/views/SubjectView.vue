<template>
    <div class="flex flex-col min-h-screen w-screen">

        <Hero/>

        <div class=" max-h-full flex grow max-w-full">
            
            <SideBar/>
            
            <div class="p-5 transition-all duration-500 ease-in-out absolute md:relative w-full" 
            :class="{' md:relative md:-translate-x-44 transition-all duration-500 ease-in-out min-w-full':!showSideBar}"
            >
                <HeaderMain :data="data"/>
                
                <div class="flex flex-wrap mt-3 justify-center md:justify-normal">
                    <CardCourse :course="course" v-for="course in data[actualGrade].courses" :key="course"/>
                </div>
                <FloatButton/>
            </div>

            
        </div>

    </div>
</template>

<script setup>

</script>



</style>