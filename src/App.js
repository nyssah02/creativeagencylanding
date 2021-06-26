import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import InfoSection from './components/InfoSection/InfoSection'
import { InfoData } from './components/InfoSection/Data'
import SkillsSection from './components/SkillsSection/SkillsSection'
import { SkillsData } from './components/SkillsSection/Data'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'
import { TestiData } from './components/TestimonialSection/Data'
import GallerySection from './components/GallerySection/GallerySection'
import FooterSection from './components/FooterSection/FooterSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection infoData={InfoData} />
      <SkillsSection skillsData={SkillsData} />
      <TestimonialSection testiData={TestiData} />
      <GallerySection />
      <FooterSection />
    </>
  )
}

export default App
