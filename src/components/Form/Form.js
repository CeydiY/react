import { useState} from 'react';

const Form = ({enviarFormulario}) => {
    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
    });
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');


    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(persona);
        enviarFormulario();
    }
    return (
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" value={persona.nombre} onChange={(e) => setPersona({...persona, nombre: e.target.value})} />
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido" value={persona.apellido} onChange={(e) => setPersona({...persona, apellido: e.target.value})} />
        <input type="button" value="Enviar" onClick={enviarDatos} />
      </form>
    );
}
export default Form;
