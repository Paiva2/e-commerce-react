import { React } from "react";
import "./components/styles/App.css";
import ProductsContext from "./components/ProductsContext";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";
import PlaceHolder from "./components/PlaceHolder";
import { MdOutlinePending } from "react-icons/md";


function App() {
  const { loading } = useContext(GlobalContext);
  if (loading)
    return (
      <PlaceHolder
        Icon={MdOutlinePending}
        title={"Loading..."}
        text={"Loading..."}
      />
    );
    return (
      <ProductsContext />    
    );
  
}

export default App;
