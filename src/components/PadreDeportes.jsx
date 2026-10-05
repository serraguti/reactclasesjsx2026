import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

export default class PadreDeportes extends Component{
    deportes = ["Petanca", "Curling", "Canicas", "Futbol"]

    state = {
        favorito: ""
    }

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    render() {
        return (<div>
            <h1>Padre deportes</h1>
            <h3 style={{backgroundColor: "lightgreen"}}>
                Su deporte favorito es: {this.state.favorito}
            </h3>
            {
                this.deportes.map((sport, index) => {
                    return (<HijoDeporte nombre={sport} key={index}
                    mostrarFavorito={this.mostrarFavorito}/>)
                })
            }        
        </div>)
    }
}