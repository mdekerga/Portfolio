import { projects } from "../data"

export default function Projets(){
    return (

        <section id="projets" className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Projets </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                {projects.map((projet, index) =>(
                <div key={index} className="p-4 card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                        src={projet.image}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title">
                        {projet.title}
                        </h3>
                        <div className="container flex flex-row flex-wrap">
                            {projet.technologie.map((techno,index) => 
                                <div key={index} className="badge badge-outline">{techno}</div>
                            )}
                        </div>
                        <p>{projet.description}</p>
                        <div className="card-actions justify-end">
                        <a href={projet.link} target="_blank" rel="noopener noreferrer"><button  className="btn">CODE</button></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </section>
    )
}