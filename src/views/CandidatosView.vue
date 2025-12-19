<template>

  <div class="candidatos-view">
    <h1>Aprobación de Candidatos</h1>
    
    <FormularioBusqueda 
      :candidato="candidatoActual" 
      @buscar="manejarBusqueda"
      @agregar="manejarAgregar"
    />
    
    <TablaCandidatos :candidatos="listaCandidatos" />
  </div>
</template>

<script>
import { obtenerCandidatoAleatorio } from '@/clients/candidatoService';
import FormularioBusqueda from '@/components/FormularioBusqueda.vue';
import TablaCandidatos from '@/components/TablaCandidatos.vue';

export default {
  name: 'CandidatosView',
  
  components: {
    FormularioBusqueda,
    TablaCandidatos
  },
  
  data() {
    return {
      candidatoActual: {
        foto: '',
        titulo: '',
        nombre: '',
        apellido: '',
        email: '',
        ciudad: ''
      },
      listaCandidatos: []
    };
  },
  
  methods: {
    async manejarBusqueda() {
      const candidato = await obtenerCandidatoAleatorio();
      this.candidatoActual = candidato;
    },
    
    manejarAgregar() {
      if (this.candidatoActual.nombre) {
        this.listaCandidatos.push({ ...this.candidatoActual });
      }
    }
  }
}
</script>

<style scoped>
.candidatos-view { max-width: 1200px; margin: 0 auto; }
h1 { text-align: center; }
.candidatos-view > * { margin-bottom: 30px; }
</style>
