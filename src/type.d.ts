export interface Dish {
  id: string,
  name: string,
  description: string,
  price: nubmer,
  image: string,
}

export interface DishMutation {
  name: string,
  description: string,
  image: string,
  price: string,
}