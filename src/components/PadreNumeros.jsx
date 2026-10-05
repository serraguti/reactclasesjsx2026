import { Component } from "react";
import HijoNumero from "./HijoNumero";

export default class PadreNumeros extends Component{
    state = {
        numeros: [],
        suma: 0
    }

    sumarNumeros = (valor) => {
        this.setState({
            suma: this.state.suma + parseInt(valor)
        })
    }

    generarNumero = () => {
        let aleat = parseInt(Math.random() * 500) + 1;
        this.state.numeros.push(aleat);
        this.setState({
            numeros: this.state.numeros
        })
    }
    render() {
        return (<div>
            <h1>Padre números</h1>
            <h2 style={{backgroundColor: "yellow"}}>
                La suma es: {this.state.suma}
            </h2>
            <button onClick={this.generarNumero}>
                Generar número
            </button>
            {
                this.state.numeros.map((num, index) => {
                    return (<HijoNumero numero={num} key={index}
                    sumarNumeros={this.sumarNumeros}/>)
                })
            }
        </div>)
    }
}