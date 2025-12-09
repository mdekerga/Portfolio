import Competences from './components/Competences'
import Footer from './components/Footer'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projets from './components/Projets'
import Formation from './components/Formation'
import Accueil from './components/Accueil'
import Experiences from './components/Experiences'
import CompetencesBUT from './components/CompetencesBUT'

export default function App(){
  return (
    <>
  <Header />
    <main className="flex flex-col w-full">
    <div className="w-full bg-section-dark flex justify-center"><Accueil /></div>
    <div className="w-full bg-section-dark flex justify-center"><Presentation /></div>
    <div className="w-full bg-section-light flex justify-center"><Formation /></div>
    <div className="w-full bg-section-light flex justify-center"><Experiences /></div>
    <div className="w-full bg-section-dark flex justify-center"><Competences /></div>
    <div className="w-full bg-section-light flex justify-center"><Projets /></div>
    <div className="w-full bg-section-dark flex justify-center"><Footer /></div>
    </main>
  </>
  )
}


