import Competences from './components/Competences'
import Footer from './components/Footer'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projets from './components/Projets'
import Formation from './components/Formation'

export default function App(){
  return (
    <>
  <Header />
    <main className="flex flex-col items-center ">
    <Presentation />
    <Formation />
    <Competences />
    <Projets />
    <Footer />
    </main>
  </>
  )
}


