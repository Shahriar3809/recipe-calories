import './App.css'
import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';


function App() {

  return (
    <>
      <div className='max-w-[1170px] m-auto p-5'>
        <Header></Header>
        <Recipes></Recipes>
      </div>
    </>
  );
}

export default App
