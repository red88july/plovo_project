import DishItem from './DishItem';
import React from 'react';
import {Dish} from '../../type';

interface Props {
  dishes: Dish [];
}

const Dishes:React.FC<Props> = ({dishes}) => {
  return (
    <>
      <h4>Dish item</h4>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish}/>
      ))}
    </>
  );
};

export default Dishes;