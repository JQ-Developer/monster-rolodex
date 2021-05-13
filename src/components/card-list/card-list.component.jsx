import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

//? Los componentes como este toman un argumento "prop", que es un objeto que se puede usar en el componente mientras se va escribiendo.
//? Una de las propiedades de los objetos prop son los children, que son todos los elementos dentro del elemento que tiene prop, se pueden acceder a esos children desde dentro de la clase
//? Para añadir css a un componente solo importo un archivo css y uso la clase "className" dentro de un return HTML, donde la className tendrá el nombre de la clase estilizada en el archivo csss

export const CardList = (props) => (
  //console.log(props);

  <div className="card-list">
    {props.monsters.map((monster) => (
      //

      <Card key={monster.id} monster={monster} />

      //
    ))}
  </div>
);
