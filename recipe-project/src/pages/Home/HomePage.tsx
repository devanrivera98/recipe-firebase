import './home.css'
import HomeMainContent from './components/HomeMainContent'
import TrendingMainPage from './components/TrendingMainPage'

export default function HomePage() {

  //fix the section top padding when completed

  return (
    <>
      <div className="container mx-auto">
        <HomeMainContent />
        <TrendingMainPage />
      </div>
    </>
  )
}
