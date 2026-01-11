import Competences from "./components/Competences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projets from "./components/Projets";
import Formation from "./components/Formation";
import Accueil from "./components/Accueil";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-gray-800 overflow-x-hidden">
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black)]"></div>
      </div>

      <Header />
      <main className="relative z-10 flex flex-col w-full">
        <div className="w-full flex justify-center">
          <Accueil />
        </div>
        <div className="w-full flex justify-center">
          <Presentation />
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full flex justify-center">
            <Formation />
          </div>
          <div className="w-full flex justify-center">
            <Experiences />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Competences />
        </div>
        <div className="w-full flex justify-center">
          <Projets />
        </div>
        <div className="w-full flex justify-center">
          <Contact />
        </div>
        <div className="w-full flex justify-center">
          <Footer />
        </div>
      </main>
    </div>
  );
}
