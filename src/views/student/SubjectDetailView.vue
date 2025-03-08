


<template>
    <div>
        <div>
            <p>{{ title }}</p>
            <p>{{ data.name }}</p>
        </div>

    </div>
</template>

<script setup>
    
    import data from "../../subjects.json";

    let route = useRoute()
    let title = route.params.subject
    let subject = ref(data.find(x=>x.name == title))
    
</script>
