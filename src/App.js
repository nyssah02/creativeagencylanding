import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import InfoSection from './components/InfoSection/InfoSection'
import { InfoData } from './components/InfoSection/Data'
import SkillsSection from './components/SkillsSection/SkillsSection'
import { SkillsData } from './components/SkillsSection/Data'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection infoData={InfoData} />
      <SkillsSection skillsData={SkillsData} />
      <TestimonialSection />
    </>
  )
}

export default App
