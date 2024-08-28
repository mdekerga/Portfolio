

export default function Accueil(){
    return (
    
    <section id="accueil" className="mt-16">
        <div className="container flex flex-col justify-center items-center">
            <p>Bienvenue, je suis</p>
            <h1 className="text-4xl font-bold">Mathieu de Kergariou</h1>
            <h2 className="text-2xl font-bold">Développeur</h2>
            <h3 className="text-xl">(Web - Mobile - Jeux)</h3>
            <a href="./public/files/MATHIEU_DK_CV.pdf" download="Mathieu_DK_CV" className="btn">
                TELECHARGER CV
            </a>
        </div>
        <a href="#header" className="btn fixed">+</a>

    </section>
    )
}