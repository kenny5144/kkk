import Image from "next/image";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Aboutus from "./component/Aboutus";
import Service from "./component/Service";
import Apointment from "./component/Apointment";
import Team from "./component/Team";
import OurVision from "./component/OurVision";
import DDDService from "./component/DDDService"
import UnderConstruction from "./component/UnderConstruction";

export default function Home() {
  return (
    <div>
     <Nav/>
     <Hero/>
     <Aboutus/>
     <OurVision/>
    <Team/>
    <DDDService/>
     <Service/>
     <Apointment/>
     {/* <UnderConstruction/> */}
    </div>
  );
}
