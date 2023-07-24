import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Carousel } from "@material-tailwind/react";
import { Rating } from "@smastrom/react-rating";
import qouteImg from "../../../../assets/quote.png";
import '@smastrom/react-rating/style.css'

const CollegeInfo = () => {
  const { id } = useParams();
  const [viewCard, setViewCards] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/collegeInfo/${id}`)
      .then((res) => res.json())
      .then((data) => setViewCards(data));
  }, [id]);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/collegeInfo/${id}/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [id]);

  const {
    collegeImage,
    events,
    eventsDetails,
    sports,
    sportsCategories,
    collegeName,
    admissionDates,
    admissionProcess,
    researchHistory,
    researchWorks,
  } = viewCard;
  return (
    <div className="max-w-[1240px] mx-auto mt-8 px-3">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
        Details about: {collegeName}
      </h2>
      <div>
        <div className="grid md:grid-cols-2 gap-6 border p-4 rounded-md">
          <img className="rounded-md md:h-[400px]" src={collegeImage} alt="" />
          <div>
            <h1 className="my-4 text-xl font-bold">Name: {collegeName}</h1>
            <p className="my-2 font-bold text-red-700">
              <span className="font-normal">{admissionDates}</span>
            </p>
            <p className="my-2 font-bold">
              Admission Process:{" "}
              <span className="font-normal">{admissionProcess}</span>
            </p>
            <p className="font-semibold">
              Research Center:{" "}
              <span className="font-normal">{researchHistory}</span>
            </p>
            <p className="font-semibold">
              Research Work:{" "}
              <span className="font-normal">{researchWorks}</span>
            </p>
            <p className="my-2 font-semibold">
              Event: <span className="font-normal text-justify">{events}</span>
            </p>
            <p className="my-2 font-semibold">
              Event Details:{" "}
              <span className="font-normal text-justify">{eventsDetails}</span>
            </p>
            <p className="font-semibold">
              Sports Fasility:{" "}
              <span className="font-normal md:text-justify">{sports}</span>
            </p>
            <p className="font-semibold">
              Sports Categories:{" "}
              <span className="font-normal md:text-justify">
                {sportsCategories}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="my-16">
          <h2>TESTIMONIALS</h2>
          <p>What Our Clients Say</p>
          <div>
            {reviews.map((review) => (
              <Carousel key={review.reviewId} className="rounded-xl">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="flex flex-col items-center mx-24 my-16">
                      <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                      />
                      <img className="w-28 pt-4" src={qouteImg} alt="" />
                      <p className="py-8">{review.comment}</p>
                      <h3 className="text-2xl text-[#CD9003]">
                        {review.username}
                      </h3>
                      </div>
                  </div>
                </div>
              </Carousel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;
