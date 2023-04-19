import { useState} from 'react';

const Form = ({enviarFormulario}) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const enviarDatos = (event) => {
        event.preventDefault();
        const nuevaPersona = { nombre, apellido };
        enviarFormulario(nuevaPersona);
        setNombre('');
        setApellido('');
    }
    return (
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <input type="button" value="Enviar" onClick={enviarDatos} />
      </form>
    );
}
export default Form;
