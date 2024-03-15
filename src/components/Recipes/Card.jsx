

const Card = () => {
    return (
      <div className="w-7/12">
        <div className="grid grid-cols-2">


          <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="px-3 pt-3">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="p-3 space-y-3">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <hr />
              <h3>Ingredients: 6</h3>
              <ul>
                <li>500g ground beef</li>
                <li>500g ground beef</li>
                <li>500g ground beef</li>
              </ul>
              <hr />
              <div className="flex justify-around">
                <p>30 Minutes</p>
                <p>600 Calories</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">Want to Cook</button>
              </div>
            </div>
          </div>

          <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="px-3 pt-3">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="p-3 space-y-3">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <hr />
              <h3>Ingredients: 6</h3>
              <ul>
                <li>500g ground beef</li>
                <li>500g ground beef</li>
                <li>500g ground beef</li>
              </ul>
              <hr />
              <div className="flex justify-around">
                <p>30 Minutes</p>
                <p>600 Calories</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">Want to Cook</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
};

export default Card;