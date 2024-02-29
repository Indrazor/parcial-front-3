const Card = ({ nombre, apellido, edad }) => {
  return (
    <div style={{ backgroundColor: "green", color: "white" }}>
      <h2>Información del usuario</h2>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Edad al año 2024: {edad}</p>
    </div>
  );
};

export default Card;
