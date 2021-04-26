import React,{useEffect,useState} from 'react';
import { getProducts } from '../../services/ProductService';
import Products from '../Buy/Products';

const Buy = () => {
    const [products,setProducts]= useState([])

    useEffect(() => {
        getProducts().then((prods) => {
          setProducts(prods);
        });
      }, []);
      return (
        <div className="Home d-flex">
          <Products products={products} />
        </div>
      );
    };
    
    export default Buy;