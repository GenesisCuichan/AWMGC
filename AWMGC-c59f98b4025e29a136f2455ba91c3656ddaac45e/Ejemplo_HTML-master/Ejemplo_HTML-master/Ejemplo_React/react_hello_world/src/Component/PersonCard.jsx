import React from "react";
import '../style/PersonCard.css'
import './menu.css';
class PersonCard extends React.Component{
    aceptarHandler(e){
        //console.log(e)
        e.stopPropagation();
        console.log('Ejecutando componente hijo');
    }

    containerHandler(){
        console.log('Ejecutando componente padre');
    }
    //CONSTRUCTOR
    constructor(props) {
        super(props);
       //Primer cambio
       //el age de aqui es el q mando del . app
        this.state = {edad: props.age};
        //qUINTO CAMBIO
        this.handlerAge = this.handlerAge.bind(this);
    }
    //metodo de clase
    //metodo cambia edad TERCER CAMBIO
    /*changeAge()*/
    handlerAge(){
        console.log(this.state.edad);
        this.setState({edad: this.state.edad + 1})
        //this.setState(prevState=>({count: parseInt(prevState.count) +1}));
    }
    handlerSelect(){
        this.props.updateMenu(this.props.name, this.props.avatarURL);
        console.log(this.props)
    }

    //metodos de clase
    render(){
        console.log("Props de PersonCard", this.props);
        //no  usamos el age aqui por que usamos el del estado que hemos creado
        const {name,city,country,address,avatarURL} = this.props; //Desestructuración
        
        return(
            <div  onClick={this.containerHandler}  className="container">
                {/*<h1>{this.props.name}</h1>
                <h3>{this.props.city}</h3>
                <h3>{this.props.country}</h3>
                <h5>{this.props.address}</h5>
                <hr/>*/}
                <img src={avatarURL} alt={name} class="imagen"/>
                <h1>{name}</h1>
                {/* cuarto Cambio */}
                <h3>{this.state.edad}</h3>
                <h3>{city}</h3>
                <h3>{country}</h3>
                <h5>{address}</h5>
                {/* Segundo Cambio */}
                <button onClick={this.handlerAge}>Aumentar edad de {name}</button>
                <button onClick={this.aceptarHandler}>Aceptar</button>
                <button onClick={this.handlerSelect}>Seleccionar</button>
                {this.props.children}
                <hr/>
                
                
            </div>
        );
    }
} 

export default PersonCard;