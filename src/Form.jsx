const Form = ({
  nombre,
  apellido,
  anioNacimiento,
  error,
  onNombreChange,
  onApellidoChange,
  onAnioNacimientoChange,
  onEnviarFormulario,
}) => {
  return (
    <form onSubmit={onEnviarFormulario}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        value={nombre}
        onChange={onNombreChange}
      />
      {error && <p>{error}</p>}
      <br />
      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        name="apellido"
        id="apellido"
        value={apellido}
        onChange={onApellidoChange}
      />
      {error && <p>{error}</p>}
      <br />
      <label htmlFor="anioNacimiento">Año de nacimiento:</label>
      <input
        type="number"
        name="anioNacimiento"
        id="anioNacimiento"
        value={anioNacimiento}
        onChange={onAnioNacimientoChange}
      />
      {error && <p>{error}</p>}
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
