import { Button } from "@material-tailwind/react";

const College = ({ college }) => {
  const {
    collegeImage,
    collegeName,
    admissionDates,
    events,
    researchHistory,
    sports,
  } = college;
  return (
    <div className="relative mx-auto w-full">
      <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
      <div className="shadow p-4 rounded-lg bg-white md:h-96"> 
          <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
              <div className="absolute">
                <img src={collegeImage} alt="" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="font-medium text-base md:text-2xl">
              {collegeName}
            </h2>
            <p className="mt-2 text-gray-900">{researchHistory}</p>
          </div>

          <div className="grid grid-cols-1 grid-rows-3 gap-4 mt-8">
            <div className="mt-2 xl:mt-0 text-red-600">{admissionDates}</div>
            <div className="mt-2 xl:mt-0 ">Upcoming Events: {events}</div>
            <div className="mt-2 xl:mt-0 ">Popular Sports: {sports}</div>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="mt-auto">
              <a href="#buttons-with-link">
                <Button color="red" size="lg" fullWidth={true}>
                  Details
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default College;
