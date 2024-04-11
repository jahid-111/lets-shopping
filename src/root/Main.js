


import React from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';

const Main = () => {
    return (
        <div className=' flex justify-center items-center'>
            <Products></Products>
            <Cart></Cart>
        </div>
    );
};

export default Main;