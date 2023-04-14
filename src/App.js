import {useState} from 'react';
import Tabla from "./components/Tabla/Tabla";
import Form from "./components/Form/Form";

const App = () => {
    const {personas, setPersonas} = useState([{nombre: "", apellido: ""}]);

    const enviarFormulario = (event) => {
        setPersonas([...personas, event])
    }
    const eliminarPersona = (event) => {

    }
    return (
        <div className="container">
            <h1>2DAW: Testeando React</h1>
            <Tabla datosPersonas={personas}
                   eliminarPersona={eliminarPersona} />
            <Form enviarFormulario={enviarFormulario} />
        </div>
    )
}
export default App;
