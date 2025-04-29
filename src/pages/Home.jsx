import AboutUs from "../components/AboutUs"
import BuildingCoaching from "../components/BuildingCoaching"
import Choose from "../components/Choose"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import JobApplication from "../components/JobApplication"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Testimonial from "../components/Testimonial"

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <AboutUs />
      <Testimonial />
      <Choose  />
      <JobApplication />
      <hr className="w-[1100px] mx-auto"/>
      <BuildingCoaching />
      <Contact />
      <Footer />
    </div>
  )
}
export default Home