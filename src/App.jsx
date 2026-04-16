import Marquee from "./components/Marquee/Marquee";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Trainers from "./components/Trainers/Trainers";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Location from "./components/Location/Location";
import FloatingWhatsapp from "./components/Floating/Floating";

function App(){

return(

<>
<Navbar />  
<Hero/>
<Marquee/>
<About/>
<Services/>
{/* <Trainers/> */}
<Testimonials/>
<Pricing/>
<CTA/>
<Location/>
<FloatingWhatsapp/>
<Footer/>
</>

)

}

export default App;