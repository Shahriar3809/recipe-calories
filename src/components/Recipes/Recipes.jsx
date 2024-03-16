import { useState } from "react";
import Card from "./Card";
import Table from "./Table";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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
    const isExist = wantToCook.find((i) => i.recipe_id == item.recipe_id);
    if(!isExist) {
      setWantToCook([...wantToCook, item]);
    } else {
      toast.warn("Already added");
    }
    
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
        <h1 className="text-center text-3xl font-bold mt-12">Our Recipes</h1>
        <p className="text-center max-w-[700px] m-auto my-5">
          Indulge in a culinary adventure with Our Recipes. Explore a diverse
          array of dishes crafted by our seasoned chefs, meticulously curated to
          tantalize your taste buds and inspire your inner chef.
        </p>
        <div className="md:flex gap-8">
          <div className="md:grid grid-cols-2 md:w-7/12 gap-5">
            {data.map((item) => (
              <Card
                data={item}
                key={item.recipe_id}
                handleCookButton={handleCookButton}
              ></Card>
            ))}
          </div>
          <div className="md:w-5/12">
            <Table
              wantToCook={wantToCook}
              handlePreparing={handlePreparing}
              preparingItem={preparingItem}
            ></Table>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Recipes;