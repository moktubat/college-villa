const Gallery = () => {

  return (
    <div className="my-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl">
          Graduate&apos;s group pictures of different colleges.
        </h2>
        <p className="pt-1">
        &quot;Goodbyes make you think. They make you realize what you&apos;ve had, what you&apos;ve lost, and what you&apos;ve taken for granted.&quot;<br /><span className="font-bold">—Ritu Ghatourey</span>
        </p>
      </div>{" "}
      <div className=" mx-auto px-5 py-2 lg:px-32">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2 transition-transform duration-500 transform ease-in-out hover:scale-110">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/r58xdk6/istockphoto-844818242-612x612.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2 transition-transform duration-500 transform ease-in-out hover:scale-110">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/kJyRRNM/istockphoto-482362583-612x612.jpg" />
      </div>
      <div className="w-full p-1 md:p-2 transition-transform duration-500 transform ease-in-out hover:scale-110">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/80Nd5G1/squad.png" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2 transition-transform duration-500 transform ease-in-out hover:scale-110">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/9yXdYDg/pexels-pixabay-267885.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2 transition-transform duration-500 transform ease-in-out hover:scale-110">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/D7YZ1PY/2017-04-provgrad2.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2 transition-transform duration-500 transform ease-in-out hover:scale-110">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/0B9mVNs/2017-04-provgrad1.jpg" />
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Gallery;
