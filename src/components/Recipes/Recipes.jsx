import { useState } from "react";
import Card from "./Card";
import Table from "./Table";
import { useEffect } from "react";


const Recipes = () => {
  const [data, setData] = useState([]);


  useEffect(()=>{
    fetch('alldata.json')
    .then(response => response.json())
    .then(data=> {
      setData(data)
    })
  }, [])


  const [wantToCook, setWantToCook] = useState([]);




  const handleCookButton = (item) => {
    setWantToCook([...wantToCook, item]);
  }



   const [preparingItem, setPreparingItem] = useState([]);

   const handlePreparing = (id) => {
     const remaining = wantToCook.filter((item) => item.recipe_id !== id);
     const deleted = wantToCook.filter((item) => item.recipe_id === id);
     
     setWantToCook(remaining);
     setPreparingItem([...preparingItem, deleted[0]]);




   };

    return (
      <div>
        <h1 className="text-center text-3xl font-bold mt-20">Our Recipes</h1>
        <p className="text-center max-w-[700px] m-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam minus
          nesciunt maiores nihil similique laudantium quam explicabo corrupti
          voluptatibus saepe.
        </p>
        <div className="flex gap-3">
          <div className="grid grid-cols-2 w-7/12 gap-5">
            {data.map((item) => (
              <Card
                data={item}
                key={item.recipe_id}
                handleCookButton={handleCookButton}
              ></Card>
            ))}
          </div>
          <div className="w-5/12">
            <Table
              wantToCook={wantToCook}
              handlePreparing={handlePreparing}
              preparingItem={preparingItem}
            ></Table>
          </div>
        </div>
      </div>
    );
};

export default Recipes;