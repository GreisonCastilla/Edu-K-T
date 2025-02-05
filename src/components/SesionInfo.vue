<script setup>

    import SignOut from './SignOut.vue';
    let name = "Greison Rey Castilla Carmona"

</script>

<template>
    <div class=" text-center pt-4 pb-1 w-full flex-col lg:w-fit lg:pr-2 lg:flex-row items-center ">
        
        <svg class="h-14 w-full lg:w-14 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
        </svg>

        <div class="p-2 flex flex-col items-center lg:items-start ">
            <a href="/" >
                <p class="text-white lg:text-lg"><b> {{ name }} </b></p>
            </a>

            <div class="p-2 lg:p-0 group">
                <sign-out></sign-out>
            </div>
            
        </div>

    </div>
</template>



