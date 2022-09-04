import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/"> <h2 className="text-2xl font-bold font-mono">Online <span className="text-indigo-400">Shop</span></h2> </Link>

                <ul className="flex items-center space-x-2 font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/cart">
                        <div className="flex items-center bg-indigo-400 px-2 py-1 rounded-md space-x-1">
                            <span>1</span>
                            <ShoppingBagIcon className="w-4 h-4 text-white"></ShoppingBagIcon>
                        </div>
                    </Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
