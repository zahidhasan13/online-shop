import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const product = (props) => {
    const { id, title, price, image, category } = props.product;
    return (
        <Link to={`/products/${id}`}>
            <div className="mt-5">
                <div className="flex justify-center">
                    <img src={image} alt="" className="w-24" />
                </div>
                <h2>{title}</h2>
                <span>category: {category}</span>
                <h4>Price: ${price}</h4>
                <button className="bg-indigo-400 px-6 py-2 rounded hover:bg-indigo-600 flex text-white font-bold">
                    Add to Cart{" "}
                    <ShoppingCartIcon className="w-6 h-6 ml-3"></ShoppingCartIcon>
                </button>
            </div>
        </Link>
    );
};

export default product;
