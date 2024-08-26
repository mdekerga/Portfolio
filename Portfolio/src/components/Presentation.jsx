

export default function Presentation(){
    return (
    
    <section id="presentation w-screen">

        <div className="container flex">
            <div className="avatar">
                <div className="w-48 rounded-full">
                    <img src="./images/113.jpg" />
                </div>
                </div>
                
                <div className="container flex flex-col justify-center">
                    <p>Bienvenue, je suis</p>
                    <h1 className="text-4xl font-bold">Mathieu de Kergariou</h1>
                    <h2 className="text-2xl font-bold">Développeur</h2>
                    <a href="./public/files/MATHIEU_DK_CV.pdf" download="Mathieu_DK_CV" className="btn">
                        TELECHARGER CV
                    </a>

                </div>
            </div>
        

    </section>
    )
}