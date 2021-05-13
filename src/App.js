import "./App.css";
import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

//! React permite regresar clases, que a diferancia de las funciones permite más funcionalidades.
//? Para poder usar una clase en React se debe importar "Component" desde react, eso da acceso a un metódo render()
//? Esto nos permite poner javaScript dentro de elementos, da acceso a el "State"
//? El state es un objeto de javascript al que podemos acceder el cualquier momento dentro de una clase
//? Dentro de un elemento al poner curly bracess react se da cuenta que estoy poniendo javasCript
//? Esta clase tambien me da acceso al SetState() method que me deja cambiar el state
//? Tan pronto como se cambia es state la el método render() de vuelve a activar

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       string: "Hello José!",
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload, or do whatever you
//             want, or anything your gf wants!
//           </p>

//           {/* Aquí obtuve acceso al objeto State porque estoy trabajando dentro de una clase */}
//           <p>{this.state.string}</p>

//           <button
//             // Dentro de onClick uso una funcion para cambiar el estado de la cuerda de definí dentro del objeto State
//             onClick={() => this.setState({ string: `I've been changed!` })}
//           >
//             Click me to change name!
//           </button>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload, or do whatever you
          want!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

//! Ahora a construir la verdadera App
//? Usualmente react nos pide una propiedad que es unica a cada elemto de un HTML, para saber si se le debe hacer una modificación en algun momento. Se hacer con key={}, eso le ayuda React a no reenderizar toda la aplicación, sino las partes de HTML que fueron modificadas.
//? Los métodos "ciclo de vida" son metodos dentro de la clase "component" que se llaman en determinados momnetos del proceso del componente cuando de renderiza
//? Uno de estos métodos es "componentDidMount()" el cual es llamado cuado el componente es puesto o "montado" en la página.

//? Podemos combinar elementos de HTML con elementos creados por nosotrso mismos, empiezan con Mayúscula a diferencia de los elementos de HTML
//? Cada componenete es una función que reenderiza
//? this.setState es una funcion asynchronous! y ese metodo nos da un segundo argumento, que es una funcion callback
//? SyntheticEvent son eventos de react, como onChange, que es diferente de onchange event de html, básicamente hace que los eventos sean compatibles en todos los navegadores
//? los functional components a diferencia de las clases no tienen los lifecycle methods, tampoco tiene acceso internal state, son mayormente para reenderizar html, si no tienes que usar esas cosas de clases es mejor que hagas un componente, más fácil de leer y más reusable

class App extends Component {
  constructor() {
    super();
    //! LA INFORMACION INGRESA A LA APLICACION COMO STATE Y SE PROPAGA POR LOS COMPONENTES COMO PROPS
    this.state = {
      monsters: [
        /*
        {
          name: "Frankenstein",
          id: "clavos",
        },
        {
          name: "Dracula",
          id: "dientes",
        },
        {
          name: "Zoombie",
          id: "cerebro",
        },*/
      ],
      searchField: "",
    };

    //Estoy definiendo el contexto de "this" en esta fincion, ligandolo mediante bind al objeto en que se encuentra
    this.handleChange = this.handleChange.bind(this);
  }

  //Sin embargo usando arrow functions no me tengo que preocupar por eso ya que ellas no tienen un this definido, por lo que puedo amarrarlas al contexto donde fueron creadas, que este caso es la clase. A esto se le llama "lexical scope"

  /*handleChange(e) {
    this.setState({ searchField: e.target.value });
  }*/
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;

    //Esto filtra los monstros por el nombre, el metodo includes lo que hacer es buscar en la string a ver si tiene la cadena de caracteres que introdujo el usuario
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        {/* este el sistema de busqueda */}

        <SearchBox
          placeholder="search for a buddy"
          handleChange={this.handleChange}
        />

        {/* Le estpoy pasando un prop a mi componente  */}
        <CardList monsters={filterMonsters} /*name="José"*/></CardList>
      </div>
    );
  }
}

export default App;
