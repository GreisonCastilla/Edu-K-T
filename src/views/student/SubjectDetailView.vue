


<template>
    <div>
        <div v-if="subject == null || activity == null">
            no se encontro
        </div>
        <div v-else>
            <p>{{ subject.name }}</p>
            <p>{{ activity.name }}</p>
            <p>{{ activity.description }}</p>
        </div>

    </div>
</template>

<script setup>
    
    import data from "../../subjects.json";
    import { useRoute } from "vue-router";
    import { ref } from "vue";

    let route = useRoute()
    let title = route.params.subject
    
    let subject = data.find(x=>x.name == title)
    console.log(subject)
    let activity = ref(null)

    let act = route.params.activity
    try{
        activity = ref(subject.activities.find(x=> x.name == act))
    }catch(error){
        console.error(error)
    }
    
</script>
