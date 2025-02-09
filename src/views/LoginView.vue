
<script setup>
    import InputText from "../components/InputText.vue";
    import NormalButton from "../components/NormalButton.vue";
    import GoogleButton from "../components/GoogleButton.vue";
</script>


<template>
  <div class="flex h-full align-middle bg-gray-500 justify-center items-center">

    <div class=" drop-shadow-xl w-5/6 flex h-4/5 rounded-xl bg-white ">
      <div class="hidden md:flex bg-gray-700 w-1/2">

      </div>

      <div class="w-full md:w-1/2 p-6 md:p-12 space-y-8">

        <p class="text-xl mb-12"><b>Inicio de Sesion - Estudiante</b></p>

        <InputText
          id="Identificación"
          type="text"
        ></InputText>
        <InputText
          id="Contraseña"
          type="password"
        ></InputText>

        <div class="flex-col space-y-4 md:flex md:flex-row md:space-x-4 md:space-y-0 ">
            <NormalButton action="Iniciar sesion"></NormalButton>
            <GoogleButton></GoogleButton>
        </div>

      </div>

    </div>

  </div>
</template>
