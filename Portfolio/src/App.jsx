import Competences from './components/Competences'
import Footer from './components/Footer'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projets from './components/Projets'
import Formation from './components/Formation'

export default function App(){
  return (
  <main className="text-gray-400 bg-gray-900 body-font">
    <Header />
    <Presentation />
    <Formation />
    <Competences />
    <Projets />
    <Footer />
  </main>
  )
}


