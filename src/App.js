import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer/>
    </div>
  );
}

export default App;
