import {useState} from 'react';
import Tabla from "./components/Tabla/Tabla";
import Form from "./components/Form/Form";

function App (){
    const [personas, setPersonas] = useState([]);

    const enviarFormulario = (persona) => {
        setPersonas([...personas, persona]);

    }
    const eliminarPersona = (indice) => {
        setPersonas(personas.filter((persona, i) => i !== indice));
    }
    return (
        <div className="container">
            <h1>2DAW: Testeando React</h1>
            <Tabla datosPersonas={personas} eliminarPersona={eliminarPersona} />
            <Form enviarFormulario={enviarFormulario} />
        </div>
    )
}
export default App;
