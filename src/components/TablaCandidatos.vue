<template>
  <div class="tabla-candidatos">
    <h2>Lista de Candidatos</h2>
    
    <table v-if="candidatos.length > 0">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="(candidato, index) in candidatos" :key="index">
          <td>{{ candidato.titulo }}</td>
          <td>{{ candidato.nombre }}</td>
          <td>{{ candidato.apellido }}</td>
          <td>{{ candidato.email }}</td>
          <td>{{ candidato.ciudad }}</td>
        </tr>
      </tbody>
    </table>
    
    <p v-else>No hay candidatos agregados</p>
  </div>
</template>

<script>
export default {
  name: 'TablaCandidatos',
  
  
  props: {
    candidatos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.tabla-candidatos { padding: 20px; border: 2px solid #5C7CFA; border-radius: 15px; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #5C7CFA; padding: 10px; text-align: left; }
th { background-color: #5C7CFA; color: white; }
</style>
