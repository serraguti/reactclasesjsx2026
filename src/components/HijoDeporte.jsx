import { Component } from "react";

export default class HijoDeporte extends Component{
    seleccionarFavorito = () => {
        //CUANDO DESEEMOS, LLAMAMOS AL PADRE MEDIANTE SU METODO
        //EN props
        this.props.mostrarFavorito(this.props.nombre);
    }
    render () {
        return (<div>
            <h3 style={{color: "blue"}}>
                Deporte: {this.props.nombre}
            </h3>
            <button onClick={this.seleccionarFavorito}>
                Favorito
            </button>
        </div>)
    }
}