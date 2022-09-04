import { ArrowLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[params.id])

    return (
        <>
            <div className='container mx-auto'>
                <ArrowLeftIcon className='w-6 h-6 font-bold' onClick={()=> navigate(-1)}></ArrowLeftIcon>

                <div className='flex mt-10'>
                    <img src={product.image} alt="" className='w-24'/>
                    <div className='ml-10 space-y-4'>
                        <h2 className='text-xl font-bold mb-2'>{product.title}</h2>
                        <span>Category: {product.category}</span>
                        <h3>Price: $ {product.price}</h3>
                        <button className="bg-indigo-400 px-6 py-2 rounded hover:bg-indigo-600 flex text-white font-bold">
                    Add to Cart{" "}
                    <ShoppingCartIcon className="w-6 h-6 ml-3"></ShoppingCartIcon>
                </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;