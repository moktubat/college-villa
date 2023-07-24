import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const College = ({ college }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    _id,
    collegeImage,
    collegeName,
    admissionDates,
    events,
    researchHistory,
    sports,
  } = college;
  const handleDetails = () => {
    if (!user) {
      Swal.fire({
        title: "Please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#159A9C",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("hello world");
          navigate("/login");
        }
      });
    } else {
      navigate(`/collegeInfo/${_id}`);
    }
  };
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
            <h2 className="font-medium text-base md:text-2xl">{collegeName}</h2>
            <p className="mt-2 text-gray-900">{researchHistory}</p>
          </div>

          <div className="grid grid-cols-1 grid-rows-3 gap-4 mt-8">
            <div className="mt-2 xl:mt-0 text-red-600">{admissionDates}</div>
            <div className="mt-2 xl:mt-0 ">Upcoming Events: {events}</div>
            <div className="mt-2 xl:mt-0 ">Popular Sports: {sports}</div>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="mt-auto">
              <a onClick={handleDetails}>
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
