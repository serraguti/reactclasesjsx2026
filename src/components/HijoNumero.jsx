import { Component } from "react";

export default class HijoNumero extends Component{
    seleccionarNumero = () => {
        this.props.sumarNumeros(this.props.numero);
    }

    render() {
        return (<div>
            {
                this.variable == 0 ?
                <h1>La variable es CERO</h1>:
                this.variable >= 0 ?
                <h1>La variable es mayor a cero</h1>:
                <h1>La variable es negativa</h1>
            }
            <h1 style={{color:"red"}}>
                Número: {this.props.numero}
            </h1>
            <button onClick={this.seleccionarNumero}>
                Sumar {this.props.numero}
            </button>
        </div>)
    }
}