import React from 'react';
import logo from '../../images/hero-img.png'

const Header = () => {
    return (
        <>
            <div className="container mx-auto flex items-center justify-between py-10">
                <div className='w-1/2'>
                    <p className='text-sm font-bold'><em>Are you feel boaring?</em></p>
                    <h1 className='text-6xl font-bold my-4'>Let's Shopping</h1>
                    <button className='bg-indigo-400 px-6 py-2 rounded text-white font-bold hover:bg-indigo-600 transition duration-200 capitalize'>order now</button>
                </div>
                <div className='w-1/2'>
                    <img src={logo} alt="" className="w-4/5"/>
                </div>
            </div>
        </>
    );
};

export default Header;