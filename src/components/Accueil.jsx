

export default function Accueil(){
    return (
    
    <section id="accueil" className="mt-36 mb-52">
        <div className="container flex flex-col justify-center items-center animate-fade-in-down">
            <p className="text-lg  mb-4">Bienvenue, je suis</p>
            <h1 className="text-4xl font-bold mb-4">Mathieu de Kergariou</h1>
            <h2 className="text-2xl font-bold">Développeur </h2>
            <h3 className="text-xl">(Web - Mobile - Jeux)</h3>
            <a href="./dist/files/mathieu_dk_cv.pdf" download="CV.pdf" className="btn mt-12">
                TELECHARGER MON CV
            </a>
        </div>
        <a href="#header" className="btn fixed right-12 bottom-8 text-xl z-10 bg-rose-800 text-black">↑</a>
    </section>
    )
}