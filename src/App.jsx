import "./App.css";
import Header from "./componentes/Header";
import MyCard from "./componentes/MyCard";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div>
      <Header titulo="adopta un perrito" />
      <main className="texto1">
        <MyCard
          imagen="labrador.jpg"
          descripcion="lleno de energia y listo para jugar.!dale a Bartolo el hogar amoroso que se merece!"
          nombre="Labrador"
          color="success"
        />
        <MyCard
          imagen="maltes.jpg"
          descripcion="es jugueton, amigable y se lleva bien con niños y otros animales.¡Haz de Dominga parte de tu familia hoy mismo!"
          nombre="Maltes"
          color="primary"
        />
        <MyCard
          imagen="pastoraleman.jpg"
          descripcion="un perro de tamaño mediano con gran corazon gigante.hazte amigo de Nerito y experimenta un amor incondicional!"
          nombre="Pastor Aleman"
          color="danger"
        />
        <MyCard
          imagen="salchicha.jpg"
          descripcion="es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Nitella a encontrar su final feliz!"
          nombre="Salchica"
          color="warning"
        />
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
