import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: "Hola soy martin aprendiendo react!",
      age: 26
    };
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.name} y mi edad es {this.state.age}</p>
        <button onClick = {() => this.setState({ name: "Hola soy martin apretando un boton", age: 27})}>Press Me!</button>
      </header>
    </div>
    )
  }
}

export default App;
