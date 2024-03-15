

const Banner = () => {
    return (
      <div className="bg-[linear-gradient(to_top,#000000eb,#000000d1),url('https://i.ibb.co/JKtSbfV/20240229-144008.jpg')] flex justify-center items-center h-96 text-white rounded-2xl">
        <div className="p-24 max-w-[900px] text-center space-y-5">
          <h1 className="font-bold text-3xl">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p>
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="flex gap-5 justify-center">
            <button className="bg-green-500 font-semibold text-black border-2 px-5 py-2 rounded-full">
              Explore Now
            </button>
            <button className="border-2 font-semibold px-5 py-2 rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;