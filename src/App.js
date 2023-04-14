import React, {Component} from 'react';
import Tabla from "./components/Tabla/Tabla";
import Form from "./components/Form/Form";


class App extends Component {
    /*Form = () => {
        const {values, setValues} = useState([{nombre: "", apellido: ""}]);
    };*/
     state = {
         personas: [],
    };

    eliminarPersona = (indice) => {
        const { personas } = this.state
        this.setState({
            personas: personas.filter((personas, i) => {
                return i !== indice;
            }),
        });
    }
    enviarFormulario = (persona) => {
        this.setState({ personas: [...this.state.personas, persona]
        });
    }
    render() {
        const { personas } = this.state;
        return (
            <div className="container">
                <h1>2DAW: Testeando React</h1>
                <Tabla datosPersonas={personas}
                       eliminarPersona={this.eliminarPersona} />
                <Form enviarFormulario={this.enviarFormulario} />
            </div>
        )
    }
}
export default App;
