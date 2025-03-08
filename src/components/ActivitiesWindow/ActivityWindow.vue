<template>
    <table class="table-fit border-collapse w-full rounded-t-sm text-left ">
        <thead >
            <tr class="bg-gray-700 text-white">
                <th class="px-3 py-3 w-1/2">Actividad</th>
                <th class="px-3 py-3">Fecha de entrega</th>
                <th class="px-3 py-3">Nota</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="activity in data" :key="activity" @click="redirection(activity.name)" class="cursor-pointer hover:bg-gray-200 transition duration-200 ease-linear p-2">
                <td class="px-3 py-3">{{activity.name}}</td>
                <td class="px-3 py-3">{{activity.dueDate}}</td>
                <td class="px-3 py-3">
                    <ShowGrade :average="activity.average"/>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import ShowGrade from '../Cardcourse/ShowGrade.vue';
    import { router } from '../../router/router';
    import { useRoute } from "vue-router";

    let route = useRoute()
    let title = route.params.subject

    function redirection(activity){
        router.push({name:'SubjectDetailView', params:{subject:title, activity: activity}})
    }

    defineProps({
        data: Object,
    })

</script>
