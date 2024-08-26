import { diplomes } from "../data"

export default function Formation(){
    return(
        <section id="formation">
            <h2 className="text-3xl font-bold dark:"> Formation </h2>

            {diplomes.map((diplome, index) => (
                <div className="flex justify-between mt-16" key={index}>
                    <h3 className="text-xl font-bold">{diplome.date}</h3>
                    <div>
                        <h4 className="font-bold">{diplome.ecole}</h4>
                        <p>{diplome.lieu}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}