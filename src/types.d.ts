export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export type ApiDish = Omit<Dish, 'id'>;

export interface DishesList {
  [id: string]: ApiDish;
}

export interface DishMutation {
  name: string;
  description: string;
  image: string;
  price: string;
}

export interface CartDish {
  dish: Dish;
  amount: number;
}

export interface Customer {
  name: string;
  address: string;
  phone: string;
}

export interface OrderData {
  customer: Customer;
  dishes: CartDish[];
}

interface Orders {
  [id: string]: OrderData
}