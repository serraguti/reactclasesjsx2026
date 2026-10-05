import { Component } from "react";

class Contador extends Component {
    //LA DECLARACION DE VARIABLES YA NO UTILIZA JS
    //ES DECIR, const, var, let
    numero = 1;
    //CON LOS METODOS SUCEDE LO MISMO
    incrementarNumero = () => {
        //PARA ACCEDER A CUALQUIER ELEMENTO DE LA CLASE
        //SE UTILIZA LA PALABRA this
        this.numero += 1;
        console.log("Número: " + this.numero);
    }

    //LAS VARIABLES STATE SE DECLARAN EN UN OBJETO DE LA CLASE
    state = {
        valor: parseInt(this.props.inicio)
    }

    incrementarValor = () => {
        //PARA MODIFICAR EL VALOR DE CUALQUIER ELEMENTO DEL 
        //STATE SE UTILIZA setState Y NOS PERMITE MODIFICAR UNA 
        //O VARIAS VARIABLES A LA VEZ
        this.setState({
            valor: this.state.valor + 1
        })
    }

    //LA SINTAXIS DE LA LLAMADA A LOS METODOS HA CAMBIADO EN RENDER
    //PUEDO LLAMAR DIRECTAMENTE AL METODO EN ONCLICK (sin lambda) Y 
    //SIN PARENTESIS
    render() {
        return (<div>
            <h1>Contador JSX: {this.props.inicio}</h1>
            <h3 style={{color:"red"}}>Valor: {this.state.valor}</h3>
            <button onClick={this.incrementarValor}>
                Incrementar valor
            </button>
            <button onClick={this.incrementarNumero}>
                Incrementar número
            </button>
            <button onClick={ () => {
                this.incrementarNumero();
            }}>Incrementar lambda</button>
        </div>)
    }
}

export default Contador;