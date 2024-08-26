import { skills } from "../data.js"

export default function Competences() {
  return (
    <section id="competences" className="py-8">
      <h2 className="text-3xl font-bold  mb-6">Competences</h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([key, value]) => (
          <div className="p-4 shadow-lg rounded-lg"key={key}>
            <h3 className="text-2xl font-bold  mb-4">{key}</h3>
            <div className="flex flex-wrap gap-4">
              {value.map(skill => (
                <img className="w-12 h-12" key={skill} src={`./icons/${skill}.svg`} alt={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
