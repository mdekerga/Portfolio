import { skills } from "../data.js"

export default function Competences() {
  return (
    <div>
      <h3 className="text-3xl font-bold dark:text-white">Competences</h3>
      
      {Object.entries(skills).map(([key, value]) => (
        <div key={key}>
            <h4 className="text-2xl font-bold dark:text-white">{key}</h4>
                <div className="flex">
                    {value.map(skill => (
                    <img className="w-12"key={skill} src={`./icons/${skill}.svg`} alt={skill} />
                    ))}
                </div>
        </div>
        ))}
    </div>
  );
}
