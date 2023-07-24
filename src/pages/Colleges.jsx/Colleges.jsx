import { useEffect, useState } from "react";
import College from "../Shared/College/College";
import useTitle from "../../hook/useTitle";

const Colleges = () => {
  useTitle(Colleges);
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("https://college-villa-server-side.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl">Best Colleges for You in Italy</h2>
        <p className="pt-1">
          Universities in Italy are very affordable compared to their
          counterparts in Western Europe, and the quality of education is
          undeniable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {colleges.map((college) => (
          <College key={college._id} college={college}></College>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
