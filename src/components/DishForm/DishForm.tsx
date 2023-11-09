import React, {useState} from 'react';
import {Dish, DishMutation} from '../../type';

interface Props {
  onSubmit: (dish: Dish) => void;
}

const DishForm: React.FC<Props>= ({onSubmit}) => {

  const [dish, setDish] = useState<DishMutation>({
    name: '',
    description: '',
    image: '',
    price: '',
  });

  const changeDish = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   setDish((prev) => ({
     ...prev,
     [e.target.name]: e.target.value,
   }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...dish,
      price: parseFloat(dish.price),
    });
  };

  return (
      <form onSubmit={onFormSubmit}>
        <h4>Add new dish</h4>
        <div className="form-group mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={dish.name}
            onChange={changeDish}
            className="form-control"/>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="name">Description</label>
          <textarea
            name="description"
            id="description"
            value={dish.description}
            onChange={changeDish}
            className="form-control"/>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="name">Image</label>
          <input
            type="url"
            name="image"
            id="image"
            value={dish.image}
            onChange={changeDish}
            className="form-control"/>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="name">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={dish.price}
            onChange={changeDish}
            className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Create</button>
      </form>
  );
};

export default DishForm;