const { Component } = require("react");

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

    //LA SINTAXIS DE LA LLAMADA A LOS METODOS HA CAMBIADO EN RENDER
    //PUEDO LLAMAR DIRECTAMENTE AL METODO EN ONCLICK (sin lambda) Y 
    //SIN PARENTESIS
    render() {
        return (<div>
            <h1>Contador JSX</h1>
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