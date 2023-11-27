import Renderer from "markdown-it/lib/renderer";
import React from "react";
import Botones from "./Botones"

const studentName = "Alejo Borracci";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default Bienvenido = function () {
  // el código de tu componente acá
  const alerts = {
    m1: "Mensaje del botón 1",
    m2: "Mensaje del botón 2"
  };
  return(
    <div>
      <h1>Hola, estoy renderizando</h1>
      <h3>{studentName}</h3>
      <ul>
      {techSkills.map((skill, index) => (
      <li key={index}> {skill} </li>  
      ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
