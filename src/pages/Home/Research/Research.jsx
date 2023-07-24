const Research = () => {
  return (
    <div>
      <div className="my-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl">
        Research Papers.
        </h2>
        <p className="pt-1">
        Research is a process of careful inquiry leading to the discovery of new information.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center w-9/12 m-auto py-2 px-3 bg-[url('https://www.sagefrog.com/wp-content/uploads/2018/12/Trends-Image.jpg')] bg-cover">
          <div className="w-full">
            <ul className="w-full mx-auto">
              <li className="cursor-pointer mb-2 pl-5 bg-[#f39761] py-2 rounded font-semibold ">
                1.{" "}
                <a
                  className="underline mr-4 text-blue-700"
                  href="https://www.bestcolleges.com/careers/education/educational-leadership/"
                >
                  Research in Physics.
                </a>
                <span>Author: John Doe</span>
              </li>
              <li className="cursor-pointer mb-2 pl-5 bg-[#f39761] py-2 rounded font-semibold  ">
                2.{" "}
                <a
                  className="underline mr-4 text-blue-700"
                  href="https://www.bestcolleges.com/careers/technology/software-engineering/"
                >
                  Environmental Sciences.
                </a>
                <span>Author: Sam Smith</span>
              </li>
              <li className="cursor-pointer mb-2 pl-5 bg-[#f39761] py-2 rounded font-semibold  ">
                3.{" "}
                <a
                  className="underline mr-4 text-blue-700"
                  href="https://www.bestcolleges.com/careers/technology/"
                >
                  Biology and Medicine.
                </a>
                <span>Author: Christina Payne</span>
              </li>
              <li className="cursor-pointer mb-2 pl-5 bg-[#f39761] py-2 rounded font-semibold  ">
                4.{" "}
                <a
                  className="underline mr-4 text-blue-700"
                  href="https://www.bestcolleges.com/careers/psychology/"
                >
                  Business and Economics.
                </a>
                <span>Author: Tyler Epps</span>
              </li>
              <li className="cursor-pointer mb-2 pl-5 bg-[#f39761] py-2 rounded font-semibold  ">
                5.{" "}
                <a
                  className="underline mr-4 text-blue-700"
                  href="https://www.bestcolleges.com/resources/financial-education/"
                >
                  Research in Artistic Expression.
                </a>
                <span>Author: Robert Johnson</span>
              </li>
              <li className="cursor-pointer mb-2 pl-5 bg-[#f39761] py-2 rounded font-semibold  ">
                6.{" "}
                <a
                  className="underline mr-4 text-blue-700"
                  href="https://www.bestcolleges.com/resources/resume-cover-letter-guide/"
                >
                  Research in Computer Science.
                </a>
                <span>Author: Devin Anders</span>
              </li>
              <li className="cursor-pointer mb-2 pl-5 bg-[#f39761] py-2 rounded font-semibold  ">
                7.{" "}
                <a
                  className="underline mr-4 text-blue-700"
                  href="https://www.bestcolleges.com/resources/mental-health/"
                >
                  Engineering and Technology.
                </a>
                <span>Author: Saina</span>
              </li>
              <li className="cursor-pointer mb-2 pl-5 bg-[#f39761] py-2 rounded font-semibold  ">
                8.{" "}
                <a
                  className="underline mr-4 text-blue-700"
                  href="https://www.bestcolleges.com/resources/networking/"
                >
                  Research in Chemistry Science.
                </a>
                <span>Author: Sarfaraj khan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
