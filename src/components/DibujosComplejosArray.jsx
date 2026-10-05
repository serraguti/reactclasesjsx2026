import { Component } from "react";

class DibujosComplejosArray extends Component {
    dibujarNumeros = () => {
        let lista = [];
        for (let i = 1; i <= 7; i++){
            var num = parseInt(Math.random() * 120) + 1;
            //AÑADIMOS CADA NUMERO A LA LISTA CON HTML
            lista.push(<li key={i}>{num}</li>);
        }
        return lista;
    }
    render () {
        return (<div>
            <h1>Dibujos complejos Array</h1>
            <ul>
                {this.dibujarNumeros()}
            </ul>
        </div>)
    }
}

export default DibujosComplejosArray;