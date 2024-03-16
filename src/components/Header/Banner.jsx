

const Banner = () => {
    return (
      <div className="bg-[url('https://i.ibb.co/DKDF7hP/Rectangle-1.png')] bg-cover flex justify-center items-center  md:h-[550px] text-white rounded-2xl">
        <div className="md:p-24 md:max-w-[900px] text-center space-y-5">
          <h1 className="font-bold text-xl md:text-3xl">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p>
            Unleash your culinary creativity with our bespoke cooking classes!
            Tailored to your preferences, our expert chefs guide you through a
            personalized culinary journey. Embrace the art of cooking with us
            today!
          </p>
          <div className="md:flex gap-5 justify-center">
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