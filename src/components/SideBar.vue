<script setup>
    import {ref} from 'vue'
    import { showSideBar } from '../composables/useSideBar';
    import options from "./options.json"
    import SesionInfo from './SesionInfo.vue';
    let nombre = "Greison Rey Castilla Carmona"

    let selected = ref(options[0])

</script>

<template>
    <div class="sidebar transform flex flex-col -translate-x-full
     bg-gray-700 relative min-w-44 transition 
     duration-500 ease-in-out text-black z-20 min-h-full "
     
     :class="{'absolute translate-x-0 duration-500 ease-in-out z-20 ':showSideBar}"
     >

        <SesionInfo class="lg:hidden flex"></SesionInfo>

        <div class="flex p-3 justify-center bg-gray-500 ">
            <p class="text-white text-lg "><b>Grados</b></p>
            
        </div>

        <div class="flex-col grow">
            <div class="flex" v-for="option in options" :key="option">
            
                <div class="p-2 flex text-white text-sm justify-center hover:bg-white hover:text-gray-700 transition 
                    duration-500 ease-in-out cursor-pointer min-w-full"
                    :class="{' bg-white text-gray-700 ':selected===option} " @click="selected=option">
                    <b :class="{'text-gray-700':selected===option}">{{ option }}</b>
                </div>
            
            </div>
        </div>
        
        
    </div>
</template>
