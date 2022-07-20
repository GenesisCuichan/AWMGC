
import './App.css';
import React from 'react';
import PersonCard from './Component/PersonCard'
import Menu from './Component/Menu'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      avatarURL: 'https://play-lh.googleusercontent.com/gXJLTDIvxXTK6uKl2e3Od_zmrlEul1CbkgxWxjbGeDzLl4EMFsdfER2VEgqAue2v1TE'
    };
    this.updateMenu = this.updateMenu.bind(this);
    
  }
  updateMenu(updateName, updateAvatarURL){
    this.setState({name: updateName, avatarURL: updateAvatarURL});
  }
  render(){
    
    const data = [
      {avatarURL: "https://i.pinimg.com/736x/75/c4/57/75c457151cc8211f4069c2bb3ebd29a5.jpg", name:'Laura', age: 1, city: 'Cuenca', country: 'Ecuador', address: 'García Moreno y Venezuela'},
      {avatarURL: "https://i.pinimg.com/originals/da/93/ed/da93ed4e40ade41998432aae52bd4785.jpg",age: 1, name:'Genesis', city: 'Loja', country: 'Ecuador', address: 'Pichincha y Venezuela'},
      {avatarURL: "https://i.pinimg.com/originals/ae/23/32/ae2332ae944a95cabfbd65f0dc79d2c4.jpg", name:'Sarah',age: 1, city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232'},
      {avatarURL: "https://i.pinimg.com/474x/ae/55/62/ae556255d2d9f8db3f84d7d9c21c48af.jpg", name:'Andrea',age: 1, city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232'},
      {avatarURL: "https://i.pinimg.com/originals/2a/29/5e/2a295e384d01ad83f7595267e1618715.jpg", name:'Josselin', age: 1,city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232'}
    ];
    return(
      <div className='App'>
        <Menu name={this.state.name} avatarURL={this.state.avatarURL}/>
        {data.map((person,index) =>(
          <PersonCard key={index} avatarURL={person.avatarURL} name={person.name} age={person.age} city={person.city} country={person.country} address={person.address} updateMenu={this.updateMenu}>
            <button onClick={()=>alert(`Contactando a ${person.name}`)}>{`Contactar a ${person.name}`}</button>
          </PersonCard>
        )
        )}
        {/*<PersonCard name={data[0].name} city={data[0].city} country={data[0].country} address={data[0].address}/>
        <PersonCard name={data[1].name} city={data[1].city} country={data[1].country} address={data[1].address}/>
    <PersonCard name={data[2].name} city={data[2].city} country={data[2].country} address={data[2].address}/>*/}
        {/*data.map((person,index) =>(
          <PersonCard key={index} img={person.img} name={person.name} age={person.age} city={person.city} country={person.country} address={person.address}>
            <button onClick={()=>alert(`Contactando a ${person.name}`)}>{`Contactar a ${person.name}`}</button>
          </PersonCard>
        )
        )*/}
      </div>
    );
  }
}

export default App;

//Clase
/*class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Aplicaciones Web y Móviles</h1>
        <p>Hello World!!!</p>
        <h2>Materias 2022-A</h2>
        <ul>
          <li>Aplicaciones Web y Móviles</li>
          <li>Redes e Intranets</li>
          <li>Aplicaciones Distribuidas</li>
        </ul>
      </div>
    );
  }
}*/

//Función
/*const App = () =>{
  return(
    <div className="App">
      <h1>Aplicaciones Web y Móviles</h1>
      <p>Hello World!!</p>
    </div>
  );
}*/

//Función por defecto
/*function App() {
  return (
    <div className="App">
      {
      /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
    /*}
      /*<h1>Aplicaciones Web y Móviles</h1>
      <p>Hello World!!!</p>
    </div>
  );
}*/
