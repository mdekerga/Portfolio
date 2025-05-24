import React, { useEffect, useRef, useState } from "react"
import { experiences } from "../data"

export default function Experiences(){
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
            <h2 className="text-primary text-4xl font-bold mb-6"> Experiences </h2>

            <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex-grow">
                    {experiences.map((experience, index) => (
                    <div className="text-primary mb-16 mt-16" key={index}>
                        <div className="flex items-center">
                        <img className="w-16 h-16 mr-4" src={experience.logo} alt="Logo" />
                        <div>
                            <h4 className="font-bold text-lg">{experience.emploi}</h4>
                            <h4 className="font-bold text-lg">{experience.entreprise}</h4>
                            <p className="text-lg ">{experience.lieu}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}