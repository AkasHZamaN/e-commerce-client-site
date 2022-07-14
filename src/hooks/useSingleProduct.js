import { useEffect, useState } from 'react';

const useSingleProduct = (id) => {
    const [items, setItems] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [id]);


    return [items, setItems]
};

export default useSingleProduct;