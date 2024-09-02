import React, { useEffect, useRef, useState } from "react"
import { diplomes } from "../data"

export default function Formation(){
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(sectionRef.current); // Stop observing after it becomes visible
            }
        },
        {
            threshold: 0.5
            , // Trigger when 10% of the section is visible
        }
        );

        if (sectionRef.current) {
        observer.observe(sectionRef.current);
        }

        return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
        };
    }, []);

    return(
        <section id="formation" 
        ref={sectionRef}
        className={`mt-24 flex flex-col items-center ${
        isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
      }`}
      >
            <h2 className="text-4xl font-bold mb-6"> Formation </h2>

            <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex-grow">
                    {diplomes.map((diplome, index) => (
                    <div className="mb-16 mt-16" key={index}>
                        <div className="flex items-center">
                        <img className="w-16 h-16 mr-4" src={diplome.logo} alt="Logo" />
                        <div>
                            <h4 className="font-bold text-lg">{diplome.date}</h4>
                            <h4 className="font-bold text-lg">{diplome.ecole}</h4>
                            <p className="text-lg ">{diplome.lieu}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}