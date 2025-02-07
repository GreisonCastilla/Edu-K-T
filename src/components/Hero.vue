<script setup>
    import { showSideBar } from '../composables/useSideBar';
    import SesionInfo from './SesionInfo.vue';

</script>

<template>

    <div class="min-h-24 z-10 bg-slate-600 flex items-center p-5">

        <div class="flex grow">

            <button @click="showSideBar=!showSideBar ">

                <div v-if="showSideBar"  class="hover:bg-slate-700 rounded-full p-2 ease-in-out duration-700 hover:transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:size-10 size-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>

                <div v-else class="hover:bg-slate-700 rounded-full p-2 ease-in-out duration-700 hover:transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:size-10 size-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>

            </button>

            <a href="/" class="flex text-white items-center">
            <svg class="w-14 h-14 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
            </svg>

            <div class="flex-col flex-wrap">
                <p class="lg:text-2xl text-base "> <b>Edu K-T</b></p>
                <p class="lg:text-xl text-sm ">Institución Educativa Técnica Industrial Don Bosco</p>
            </div>
            </a>

        </div>
        
        <SesionInfo class="hidden lg:flex"></SesionInfo>
        
    </div>
</template>

