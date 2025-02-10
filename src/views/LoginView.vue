
<script setup>
    import InputText from "../components/InputText.vue";
    import NormalButton from "../components/NormalButton.vue";
    import GoogleButton from "../components/GoogleButton.vue";
    import ChooseRole from "../components/ChooseRole.vue";

    import { role } from "../composables/useRole";
</script>


<template>
  <div class="flex h-full align-middle bg-gray-500 justify-center items-center">

    <div class=" drop-shadow-xl w-5/6 flex h-4/5  bg-white">
      <div class="transition ease-linear duration-500 hidden text-white md:flex md:flex-col bg-gray-700 w-1/2 place-content-center items-center p-12"
      :class="{' md:translate-x-full text-gray-700 bg-white transition ease-linear duration-500':role}">
            <svg class="w-44 h-44 fill-current dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            :class="{' text-gray-700 ':role}">
                <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
            </svg>

            <p class="text-6xl" :class="{'text-gray-700':role}">Edu K-T</p>
            <p class="text-xl text-center " :class="{'text-gray-700':role}">Institucion Educativa Tecnica Industrial Don Bosco</p>
      </div>

      <div class="w-full md:w-1/2 p-6 md:p-12 space-y-8 transition duration-500 ease-linear"
      :class="{'md:-translate-x-full transition duration-500 ease-linear bg-gray-700 text-white':role}">

        <p v-if="!role" class="text-xl mb-12"><b>Inicio de Sesion - Estudiante</b></p>
        <p v-else class="text-xl mb-12"><b>Inicio de Sesion - Profesor</b></p>

        <InputText
          id="Correo"
          type="text"
        ></InputText>
        <InputText
          id="Contraseña"
          type="password"
        ></InputText>
        <p class="text-red-500 text-right ">Olvide mi contraseña</p>
        <ChooseRole></ChooseRole>

        <div class="flex-col space-y-4 md:flex md:flex-row md:space-x-4 md:space-y-0 ">
            <a href="/student"><NormalButton action="Iniciar sesion"></NormalButton></a>
            
            <GoogleButton></GoogleButton>
        </div>

      </div>

    </div>

  </div>
</template>
