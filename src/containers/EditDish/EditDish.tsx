import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ApiDish} from '../../types';
import axiosApi from '../../axiosApi';
import DishForm from '../../components/DishForm/DishForm';
import Spinner from '../../components/Spinner/Spinner';

const EditDish: React.FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState<ApiDish | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchOneDish = useCallback(async () => {
    try {
      const dishResponse = await axiosApi.get<ApiDish | null>('dishes/' + id + '.json');
      setDish(dishResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchOneDish();
  }, [fetchOneDish]);

  const onSubmit = async (dish: ApiDish) => {
    await axiosApi.put('dishes/' + id + '.json', dish);
    navigate('/');
  };

  const existingDish = dish ? {
    ...dish,
    price: dish.price.toString(),
  } : undefined;

  let formSection = <Spinner/>;

  if (!loading) {
    if (dish) {
      formSection = <DishForm onSubmit={onSubmit} existingDish={existingDish} isEdit/>;
    } else {
      formSection = <h4>Not found</h4>;
    }
  }

  return (
    <div className="row mt-2">
      <div className="col">
        {formSection}
      </div>
    </div>
  );
};

export default EditDish;
