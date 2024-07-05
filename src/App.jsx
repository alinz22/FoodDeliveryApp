import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header title="React Food App" />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
