import Card from "./Card";
import Table from "./Table";


const Recipes = () => {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold">Our Recipes</h1>
        <p className="text-center max-w-[700px] m-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam minus
          nesciunt maiores nihil similique laudantium quam explicabo corrupti
          voluptatibus saepe.
        </p>
        <div className="flex gap-5">
          <Card></Card>
          <Table></Table>
        </div>
      </div>
    );
};

export default Recipes;