



import React from 'react';
import Cart from './Cart';

const Order = () => {
    return (
        <div className=' flex justify-between items-center '>
            <div className=' bg-lime-400 w-9/12'>
                Here is you ordred
            </div>

            <Cart></Cart>

        </div>
    );
};

export default Order;