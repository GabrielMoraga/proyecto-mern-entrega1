import Navbar from "./components/Navbar";
import Formulario from "./components/Formulario";
import ProductosCards from "./components/ProductosCards";

function App() {

  return (
    <div className="container">
        <Navbar/>
        <Formulario/>
        <ProductosCards />
    </div>
  );
}

export default App;
