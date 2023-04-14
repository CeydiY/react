import { useState} from 'react';

const Form = ({enviarFormulario}) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const gestionarCambioNombre = (event) => {
        setNombre([...nombre] = event.target.nombre.value)
    }

    const gestionarCambioApellido = (event) => {
        setApellido([...apellido] = event.target.apellido.value)
    }

    const enviarDatos = () => {
        enviarFormulario();
        setNombre('');
        setApellido('');
    }
    return (
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" onChange={gestionarCambioNombre} />
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido"  onChange={gestionarCambioApellido} />
        <input type="button" value="Enviar" onClick={enviarDatos} />
      </form>
    );
}
export default Form;
