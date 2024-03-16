

const Banner = () => {
    return (
      <div className="bg-[linear-gradient(to_top,#00000082,#00000082),url('https://i.ibb.co/MVGT1sD/shawnanggg-nmp-W-Www-VSc-unsplash.jpg')] bg-cover flex justify-center items-center h-96 text-white rounded-2xl">
        <div className="p-24 max-w-[900px] text-center space-y-5">
          <h1 className="font-bold text-3xl">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p>
            Unleash your culinary creativity with our bespoke cooking classes!
            Tailored to your preferences, our expert chefs guide you through a
            personalized culinary journey. Embrace the art of cooking with us
            today!
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