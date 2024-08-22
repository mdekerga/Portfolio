import { diplomes } from "../data"

export default function Formation(){
    return(
        <section id="formation">
            <h2> Formation </h2>

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