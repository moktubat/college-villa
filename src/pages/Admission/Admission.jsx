import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["College Name", "Rating", "Admission Date", "Apply"];

const Admission = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <Card className="w-full h-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-1xl font-bold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ collegeName, collegeRating, admissionDates }, index) => {
            const isLast = index === data.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={collegeName}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-1xl font-bold"
                  >
                    {collegeName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-1xl font-bold"
                  >
                    {collegeRating}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-1xl font-bold"
                  >
                    {admissionDates}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue"
                    className="font-medium"
                  >
                    <Link to="/admitForm">
                      <button className="border  p-3  font-bold duration-300 hover:text-blue-900 rounded-md">
                        Apply Now
                      </button>
                    </Link>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Admission;
