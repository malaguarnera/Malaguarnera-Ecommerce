

import NavBar from './componentes/Navbar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './componentes/itemCount/ItemCount'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'


function App() {

  const onAdd = ( count ) => {

    console.log('productos seleccionados',count)
    }

  return (
    <>
     <NavBar/>
     <ItemListContainer/>
     <ItemCount initial={1} stock={4} onAdd={onAdd}/>
     <ItemDetailContainer/>
    </>
  )
}

export default App
