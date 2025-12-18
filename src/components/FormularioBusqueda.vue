<template>
  <div class="formulario">
    <h2>Buscar Candidato</h2>
    
    <div class="seccion-foto">
      <label class="label-foto">Fotografía</label>
      <div class="contenedor-foto">
        <img v-if="candidato.foto" :src="candidato.foto" alt="Foto del candidato" class="foto">
      </div>
    </div>
    
    <div class="campo">
      <label>Título</label>
      <input type="text" v-model="candidato.titulo" readonly>
    </div>
    
    <div class="campo">
      <label>Nombre</label>
      <input type="text" v-model="candidato.nombre" readonly>
    </div>
    
    <div class="campo">
      <label>Apellido</label>
      <input type="text" v-model="candidato.apellido" readonly>
    </div>
    
    <div class="campo">
      <label>Atributo 5</label>
      <input type="text" v-model="candidato.email" readonly>
    </div>
    
    <div class="campo">
      <label>Atributo 6</label>
      <input type="text" v-model="candidato.ciudad" readonly>
    </div>
    
    <!-- Botones -->
    <div class="botones">
      <button @click="buscarCandidato" class="btn-buscar">Buscar</button>
      <button @click="agregarCandidato" class="btn-agregar">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormularioBusqueda',
  

  props: {
    candidato: {
      type: Object,
      required: true
    }
  },
  
  methods: {

    buscarCandidato() {
      this.$emit('buscar');
    },
    

    agregarCandidato() {
      this.$emit('agregar');
    }
  }
}
</script>

<style scoped>
.formulario { max-width: 500px; margin: 0 auto; padding: 20px; border: 2px solid #5C7CFA; border-radius: 15px; }
.seccion-foto { display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px; }
.label-foto { color: #5C7CFA; font-weight: bold; }
.contenedor-foto { width: 100px; height: 100px; border: 2px solid #5C7CFA; border-radius: 10px; overflow: hidden; }
.foto { width: 100%; height: 100%; object-fit: cover; }
.campo { margin-bottom: 12px; }
.campo label { color: #5C7CFA; font-weight: bold; display: block; margin-bottom: 4px; }
.campo input { border: 1px solid #5C7CFA; padding: 8px; border-radius: 5px; width: 100%; max-width: 400px; }
.botones { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }
.botones button { padding: 10px 25px; border: none; border-radius: 5px; background-color: #5C7CFA; color: white; cursor: pointer; }
</style>
