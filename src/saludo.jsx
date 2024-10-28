function Saludo({usuario}) {
    return (
      <div> {usuario ? <h1>Bienvenido</h1>: <h1>por favor Inicia sesion </h1>} </div>
    );
  }

  export default Saludo;