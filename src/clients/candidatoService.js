import axios from 'axios';
 
export async function obtenerCandidatoAleatorio() {
  const respuesta = await axios.get('https://randomuser.me/api/');
  const usuario = respuesta.data.results[0];
  
  return {
    foto: usuario.picture.large,
    titulo: usuario.name.title,
    nombre: usuario.name.first,
    apellido: usuario.name.last,
    email: usuario.email, 
    ciudad: usuario.location.city 
  };
}
