import MainRoute from "./routes/MainRoute";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import { asyncgetUser } from "./store/actions/userActions";
import { asyncloadProduct } from "./store/actions/productAction";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetUser())
    dispatch(asyncloadProduct())
  }, [])


  return (
    <div className="w-screen h-screen text-white bg-gray-800 p-4">
      <Navbar />
      <MainRoute />
    </div>
  );
}

export default App;