import "./App.css";
import "./Form.css";
import Card from "./Card";
import Form from "./Form";
import { useState } from "react";




const App = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [anioNacimiento, setAnioNacimiento] = useState("");
  const [error, setError] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (nombre.length < 3 || nombre.startsWith(" ")) {
      setError("Nombre: al menos 3 caracteres sin espacios al inicio");
      return;
    }
    if (apellido.length < 3 || apellido.startsWith(" ")) {
      setError("Apellido: al menos 3 caracteres sin espacios al inicio");
      return;
    }
    if (anioNacimiento.length !== 4 || isNaN(anioNacimiento)) {
      setError("Año de nacimiento: debe ser un número de 4 dígitos");
      return;
    }
    setError("");
  };

  const edad = 2024 - anioNacimiento;

  return (
    <div>
      <h1>Calculadora de Edad</h1>
      <Form
        nombre={nombre}
        apellido={apellido}
        anioNacimiento={anioNacimiento}
        error={error}
        onNombreChange={(e) => setNombre(e.target.value)}
        onApellidoChange={(e) => setApellido(e.target.value)}
        onAnioNacimientoChange={(e) => setAnioNacimiento(e.target.value)}
        onEnviarFormulario={enviarFormulario}
      />
      {nombre && apellido && anioNacimiento && !error && (
        <Card nombre={nombre} apellido={apellido} edad={edad} />
      )}
    </div>
  );
};

export default App;
