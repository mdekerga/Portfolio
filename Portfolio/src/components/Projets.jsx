import { projects } from "../data"

export default function Projets(){
    return (

        <section id="projets">
            <h3 className="text-3xl font-bold dark:text-white">Projets </h3>
            <div className="container flex flex-row justify-between content-between">
                {projects.map((projet, index) =>(
                <div key={index} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                        src={projet.image}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {projet.title}
                        </h2>
                        <div className="container flex flex-row">
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