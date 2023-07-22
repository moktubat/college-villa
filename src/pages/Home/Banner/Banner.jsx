import { Carousel, Typography, Button } from "@material-tailwind/react";
import slider1 from "../../../assets/slider1.jpg";
import slider2 from "../../../assets/slider2.jpg";
import slider3 from "../../../assets/slider3.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <div className="relative h-full w-full">
          <img
            src={slider1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 pb-16">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Education is the best key success in life.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 hidden md:block"
              >
                Unlock success with education as the key. Explore the profound
                beauty of the forest and its hidden wonders. Begin your learning
                journey with us, taking the first transformative step towards
                knowledge.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={slider2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute text-right pr-12 md:pr-20 lg:pr-32 pb-12 md:pb-20 lg:pb-32 inset-0 grid h-full w-full place-items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Admit Your Favorite Course From Here.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 hidden md:block"
              >
                Education&apos;s key role in achieving success is undeniable. The forest&apos;s allure extends beyond aesthetics, paralleling the depth of knowledge we offer. Embrace growth – start your learning journey today.
              </Typography>
              <div className="flex gap-2 lg:pl-64">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={slider3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Take the first step to learn with us.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 hidden md:block"
              >
                Discover the power of education – a key to a successful life. Just as the forest holds more than beauty, our learning opportunities expand horizons. Take that first step and grow with us.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
