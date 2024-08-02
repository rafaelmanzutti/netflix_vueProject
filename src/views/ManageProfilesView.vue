<template>
    <div class="">
      <div v-if="user === ''">
        <h1>Gerenciar perfis:</h1>
        <button @click="$router.push('browse')">Concluído</button>
      </div>
      <div v-else>
        <h1>Editar perfil</h1>
      </div>
      
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ManageProfilesView',
    
  
  }
  </script>
  
  <style>
  
  </style>