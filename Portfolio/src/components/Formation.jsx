import { diplomes } from "../data"

export default function Formation(){
    return(
        <section id="formation">
            <h3 className="text-3xl font-bold dark:text-white"> Formation </h3>

            {diplomes.map((diplome, index) => (
                <div key={index}>
                    <h1>{diplome.date}</h1>
                    <h1>{diplome.ecole}</h1>
                    <h1>{diplome.lieu}</h1>
                </div>
            ))}
        </section>
    )
}