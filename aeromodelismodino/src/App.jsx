

import NavBar from './componentes/Navbar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './componentes/itemCount/ItemCount'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'


function App() {

  const onAdd = ( count ) => {

    console.log('productos seleccionados',count)
    }

  return (
    <>
     <NavBar/>
     <ItemListContainer/>
     <ItemCount initial={1} stock={4} onAdd={onAdd}/>
    </>
  )
}

export default App
