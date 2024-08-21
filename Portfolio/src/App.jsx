import Competences from './components/Competences'
import Footer from './components/Footer'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projets from './components/Projets'

export default function App(){
  return (
  <main className='bg-gray-800'>
    <Header />
    <Presentation />
    <Competences />
    <Projets />
    <Footer />
  </main>
  )
}


