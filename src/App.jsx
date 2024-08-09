import { Routes, Route} from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";
import HomePages from "./pages/HomePages";
import testimonialPages from "./pages/testimonialPages";
import FaqPages from "./pages/FaqPages";
import ClasPages from "./pages/ClasPages";
import SyaratKetentuan from "./pages/SyaratKetentuan";

function App() {
  return (
    <div>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={HomePages}/>
        <Route path="/kelas" Component={ClasPages}/>
        <Route path="/testimonial" Component={testimonialPages}/>
        <Route path="/faq" Component={FaqPages}/>
        <Route path="/syaratketen" Component={SyaratKetentuan}/>
      </Routes>
      <FooterComponents/>
    </div>
  );
}

export default App
