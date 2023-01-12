import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Categories from './componentes/Categories/Catergories';
import HomePage from './componentes/HomePage/HomePage';
import Error404 from './componentes/Error404/Error404';

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Categories/>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/detalle/:itemid' element={ <ItemDetailContainer/> } />
          <Route path='/categorias/:categoryid' element={ <ItemListContainer/>} />
          <Route path='*' element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
