
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './componentes/Navbar/navBar'
import ItemCount from './componentes/itemCount/ItemCount'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element ={<ItemListContainer/>}/>
          <Route path='/detalle' element ={<ItemDetailContainer/>}/>
                    
        </Routes>  
    </BrowserRouter>
  )
}

export default App
