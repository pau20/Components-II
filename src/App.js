import './App.css';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemContainer';

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <ItemListContainer></ItemListContainer>
      </div>
    </>
    
  );
}

export default App;