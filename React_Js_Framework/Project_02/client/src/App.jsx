import MainRoute from "./routes/MainRoute";
import Navbar from "./component/Navbar";
function App() {

  return (
    <div className="w-screen h-screen text-white bg-gray-800 p-4">
      <Navbar />
      <MainRoute />
    </div>
  );
}

export default App;