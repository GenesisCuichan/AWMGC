
import './App.css';
import React from 'react';
import PersonCard from './Component/PersonCard'

class App extends React.Component{
  render(){
    const data = [
      {img: "https://cdn.pixabay.com/photo/2021/10/22/06/07/girl-6731188_960_720.png", name:'Laura', age: 1, city: 'Cuenca', country: 'Ecuador', address: 'García Moreno y Venezuela'},
      {img: "https://img.freepik.com/vector-gratis/dibujos-animados-nina-feliz_43633-1438.jpg?w=2000",age: 1, name:'Genesis', city: 'Loja', country: 'Ecuador', address: 'Pichincha y Venezuela'},
      {img: "https://i.pinimg.com/originals/6d/fd/f3/6dfdf34f15b8ba3882f8870b1c1d0061.png", name:'Sarah',age: 1, city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232'},
      {img: "https://i.pinimg.com/736x/d6/95/31/d695313d53d7ae5a87ab0e6ad575318e.jpg", name:'Andrea',age: 1, city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232'},
      {img: "https://i.pinimg.com/564x/b9/be/c8/b9bec836cde52404249e77471d80a404.jpg", name:'Josselin', age: 1,city: 'Guayaquil', country: 'Ecuador', address: 'Alonso de Angulo 23232'}
    ];
    return(
      <div className='App'>
        {/*<PersonCard name={data[0].name} city={data[0].city} country={data[0].country} address={data[0].address}/>
        <PersonCard name={data[1].name} city={data[1].city} country={data[1].country} address={data[1].address}/>
    <PersonCard name={data[2].name} city={data[2].city} country={data[2].country} address={data[2].address}/>*/}
        {data.map((person,index) =>(
          <PersonCard key={index} img={person.img} name={person.name} age={person.age} city={person.city} country={person.country} address={person.address}>
            <button onClick={()=>alert(`Contactando a ${person.name}`)}>{`Contactar a ${person.name}`}</button>
          </PersonCard>
        )
        )}
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
