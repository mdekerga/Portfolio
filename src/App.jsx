import Competences from './components/Competences'
import Footer from './components/Footer'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projets from './components/Projets'
import Formation from './components/Formation'
import Accueil from './components/Accueil'

export default function App(){
  return (
    <>
  <Header />
    <main className="flex flex-col justify-center items-center ">
    <Accueil />
    <Presentation />
    <Formation />
    <Competences />
    <Projets />
    <Footer />
    </main>
  </>
  )
}


