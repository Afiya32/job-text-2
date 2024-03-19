import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/navBar";
import plane from "../src/assets/Logo/plane.avif"
import Distination from "./Components/Distination/Distination";
import Addeds from "./Components/Addeds/Addeds";
import PopularAir from "./Components/PopularAir/PopularAir";
import Footer from "./Components/Footer/Footer";
import TravelBlog from "./Components/TravelBlog/TravelBlog";


const App = () => {
  return (
    <div>
      {/* navbar */}
      <div 
       style={{
        backgroundImage: `url(${plane})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}>
      <NavBar/>
      <Banner/>
      </div>
      {/* main content of the page */}
      <Distination/>
      <Addeds/>
      <PopularAir/>
      <TravelBlog/>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default App;