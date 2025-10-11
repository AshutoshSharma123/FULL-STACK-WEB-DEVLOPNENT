// import MainRoute from "./routes/MainRoute";
// import Navbar from "./component/Navbar";
// import { useEffect } from "react";
// import { asyncgetUser } from "./store/actions/userActions";
// import { asyncloadProduct } from "./store/actions/productAction";
// import { useDispatch } from "react-redux";
// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(asyncgetUser())
//     dispatch(asyncloadProduct())
//   }, [])


//   return (
//     <div className="w-full min-h-screen text-white bg-gray-800 p-4">
//       <Navbar />
//       <MainRoute />
//     </div>
//   );
// }

// export default App;


import MainRoute from "./routes/MainRoute";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"; // ✅ Import Footer
import { useEffect } from "react";
import { asyncgetUser } from "./store/actions/userActions";
import { asyncloadProduct } from "./store/actions/productAction";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetUser());
    dispatch(asyncloadProduct());
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      <div>
        <Navbar />
        <main className="flex-grow p-4">
          <MainRoute />
        </main>
      </div>
      <Footer /> {/* ✅ Footer added */}
    </div>
  );  
}

export default App;
