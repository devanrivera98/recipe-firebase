import './home.css'
import HomeMainContent from './components/HomeMainContent'
import TrendingMainPage from './components/TrendingMainPage'
import OrangeCranberryHero from './components/OrangeCranberryHero'
// import useSearchApi from '../../hooks/useSearchApi'

export default function HomePage() {

  // useSearchApi('orange cranberry')
  //fix the section top padding when completed

  return (
    <>
      <div className="container mx-auto">
        <HomeMainContent />
        <TrendingMainPage />
      </div>
      <OrangeCranberryHero />
    </>
  )
}
