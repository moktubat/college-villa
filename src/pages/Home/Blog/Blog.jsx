const Blog = () => {
  return (
    <div>
      <div className="py-16">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                  Our Blogs
                </h2>
                <p className="text-base text-body-color">
                  Latest Blogs From The Colleges Teachers and Students.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto p-2 shadow-xl rounded-xl bg-[#F6D5D6]">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-[#e6671f] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-blue-900">
                      Meet AutoManage, the best AI management tools
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                  Here are the eight best AI apps for managing your social media. The best AI social media management software.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto p-2 shadow-xl rounded-xl bg-[#DACAE5]">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-[#e6671f] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-blue-900">
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                  Another way to start making more money as a health coach is by visiting local wellness centers that are looking to hire health coaches.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto p-2 shadow-xl rounded-xl bg-[#AEC4EB]">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-[#e6671f] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-blue-900">
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                  We have an in-depth guide on how you can persuade your customers to buy more with eCommerce order bumps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
