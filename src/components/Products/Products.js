import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../CartContext';
import Product from '../Product/Product'

const Products = () => {
    const {name} = useContext(CartContext)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-2xl border pl-2">Products {name}</h2>
                <div className="grid grid-cols-5 gap-6 my-5">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
        </>
    );
};

export default Products;