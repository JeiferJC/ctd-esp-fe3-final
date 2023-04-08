import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet, useNavigation } from 'react-router-dom';


function App() {

  const navigation = useNavigation();


  return (
       <div className="App">
          <Navbar/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
      </div>

     
  );
}

export default App;



