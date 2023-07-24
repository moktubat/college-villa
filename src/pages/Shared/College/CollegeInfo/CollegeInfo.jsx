import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeInfo = () => {

    const { id } = useParams()
    const [viewCard, setViewCards] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/collegeInfo/${id}`)
            .then(res => res.json())
            .then(data => setViewCards(data))
    }, [id])

    const { collegeImage, events, eventsDetails, sports, sportsCategories, collegeName, admissionDates, admissionProcess, researchHistory, researchWorks } = viewCard;
    return (
        <div className="max-w-[1240px] mx-auto mt-8 px-3">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                  Details about: {collegeName}
                </h2>
            <div>
                <div  className="grid md:grid-cols-2 gap-6 border p-4 rounded-md">
                    <img className="rounded-md md:h-[400px]" src={collegeImage} alt="" />
                    <div>
                        <h1 className="my-4 text-xl font-bold">Name: {collegeName}</h1>
                        <p className="my-2 font-bold text-red-700"><span className="font-normal">{admissionDates}</span></p>
                        <p className="my-2 font-bold">Admission Process: <span className="font-normal">{admissionProcess}</span></p>
                        <p className="font-semibold">Research Center: <span className="font-normal">{researchHistory}</span></p>
                        <p className="font-semibold">Research Work: <span className="font-normal">{researchWorks}</span></p>
                        <p className="my-2 font-semibold">Event: <span className="font-normal text-justify">{events}</span></p>
                        <p className="my-2 font-semibold">Event Details: <span className="font-normal text-justify">{eventsDetails}</span></p>
                        <p className="font-semibold">Sports Fasility: <span className="font-normal md:text-justify">{sports}</span></p>
                        <p className="font-semibold">Sports Categories: <span className="font-normal md:text-justify">{sportsCategories}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeInfo;