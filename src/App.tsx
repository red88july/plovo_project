import Toolbar from './components/Toolbar/Toolbar';
import DishForm from './components/DishForm/DishForm';
import Dishes from './components/Dishes/Dishes';
import Cart from './components/Cart/Cart';
import {useState} from 'react';
import {Dish} from './type';

function App() {
  const [dishes, setDishes] = useState<Dish []>([
    {id: '1', name: 'Plov', price: 250, description: 'Very tasty pilaf', image: 'https://img1.russianfood.com/dycontent/images_upl/538/big_537904.jpg'},
    {id: '2', name: 'Another plov', price: 350, description: 'Very tasty pilaf', image: 'https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg'},
  ]);

  const addDish = (dish: Dish) => {
    setDishes((prev) => [...prev, dish]);
  };


  return (
    <>
    <header>
      <Toolbar />
    </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <DishForm onSubmit={addDish}/>
          </div>
          <div className="col-4">
            <Dishes dishes={dishes}/>
          </div>
          <div className="col-4">
            <Cart />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
