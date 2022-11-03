import { useState} from "react";
import Cart from "./components/Carts/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/cart-context";

function App() {

  const [showModal, setShowModal]= useState(false)

  const modalShowHandler=()=>{
    setShowModal(true)
  }

  const hideShowModal=()=>{
    setShowModal(false)
  }
  return (
    <CartContextProvider>
     <Header onShowModal={modalShowHandler}/>
     <main>
      <Meals/>
     </main>
    {showModal &&  <Cart onHideModal={hideShowModal}/>}
    </CartContextProvider>
  );
}

export default App;
