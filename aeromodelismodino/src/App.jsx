

import NavBar from './componentes/Navbar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './componentes/itemCount/ItemCount'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
     <NavBar/>
     <ItemListContainer/>
     <ItemDetailContainer/>
    </>
  )
}

export default App
